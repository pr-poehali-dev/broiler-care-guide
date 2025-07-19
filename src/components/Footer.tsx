import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <Icon name="Bird" size={24} className="mr-2" />
          <span className="text-lg font-semibold">ПТИЦЕВОДСТВО ЭКСПЕРТ</span>
        </div>
        <p className="text-green-200 mb-4">
          Профессиональное разведение бройлеров с 2010 года
        </p>
        <div className="flex justify-center space-x-6 text-sm text-green-300">
          <span>© 2024 Все права защищены</span>
          <span>•</span>
          <span>Лицензия ВЕТ-77-123</span>
          <span>•</span>
          <span>ОГРН 1234567890123</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;