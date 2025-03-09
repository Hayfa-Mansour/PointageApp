import { User } from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { generateVerificationCode, SendEmailResetPassword } from "../utils/SendEmail.js"

// Fonction pour hasher un mot de passe
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Générer un token JWT
const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
};


// Fonction d'inscription (Sign Up)
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hasher le mot de passe
    const hashedPassword = await hashPassword(password);

    // Créer un nouvel utilisateur
    const newUser = new User({ name, email, password: hashedPassword });

    // Sauvegarder l'utilisateur
    await newUser.save();

    // Générer un token JWT
    const token = generateToken(newUser._id);

    res.status(201).json({ message: 'Inscription réussie.', token });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
};

// Fonction de connexion (Login)
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Veuillez fournir l\'email et le mot de passe.' });
    }

    // Trouver l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide.' });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide.' });
    }

    // Générer un token JWT
    const token = generateToken(user._id);

    res.json({ message: 'Connexion réussie.', token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
};

export const forget_password = async (req, res) => {
    const { email } = req.body;
  
    try {
      // Trouver l'utilisateur
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Email non trouvé.' });
      }
  
      // Générer un code de réinitialisation
      const forgetPasswordCode = generateVerificationCode();
      user.forget_password_code = forgetPasswordCode;
      user.passwordResetExpires = Date.now() + 3600000; // Expiration en 1 heure
  
      await user.save();
  
      // Envoyer le code par email
      await SendEmailResetPassword(user.email, forgetPasswordCode, user.name);
  
      res.json({ message: 'Les instructions pour réinitialiser le mot de passe ont été envoyées à votre email.' });
    } catch (error) {
      console.error('Erreur forget_password:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  };
  
  // Fonction de réinitialisation du mot de passe (Reset Password)
  export const reset_password = async (req, res) => {
    const { forget_password_code, newPassword } = req.body;
  
    try {
      // Trouver l'utilisateur avec un code valide
      const user = await User.findOne({
        forget_password_code,
        passwordResetExpires: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Code invalide ou expiré.' });
      }
  
      // Mettre à jour le mot de passe
      user.password = await hashPassword(newPassword);
      user.forget_password_code = null;
      user.passwordResetExpires = null;
  
      await user.save();
  
      res.json({ message: 'Réinitialisation du mot de passe réussie.' });
    } catch (error) {
      console.error('Erreur reset_password:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  };