import { Link } from "react-router-dom";
import { Settings, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Fonctionnement", href: "/fonctionnement" },
      { name: "Comparatif GTB", href: "/comparaison" },
    ],
    support: [
      { name: "Documentation", href: "/fonctionnement" },
      { name: "Formation", href: "/partenaires" },
      { name: "Support technique", href: "/contact" },
    ],
    company: [
      { name: "Qui sommes-nous", href: "/about" },
      { name: "Partenaires", href: "/partenaires" },
      { name: "Contact", href: "/contact" },
    ]
  };

  return (
    <footer className="bg-industrial-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary dark:bg-gray-900 rounded-md flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Open Building Management</span>
            </div>
            <p className="text-gray-300 mb-6">
              La régulation intelligente pour les bâtiments oubliés de la GTB.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@bios-pilotage.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Normandie, France</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} OBM. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link to="http://github.com/open-building-management" className="hover:text-white transition-colors duration-200">
                GitHub
              </Link>
              <Link to="/mentions-legales" className="hover:text-white transition-colors duration-200">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white transition-colors duration-200">
                Confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-white transition-colors duration-200">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;