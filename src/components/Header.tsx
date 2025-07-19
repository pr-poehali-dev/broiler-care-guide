import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Bird" size={32} />
          <h1 className="text-2xl font-bold">ПТИЦЕВОДСТВО ЭКСПЕРТ</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#description" className="hover:text-green-200 transition-colors">Описание</a>
          <a href="#advantages" className="hover:text-green-200 transition-colors">Достоинства</a>
          <a href="#care" className="hover:text-green-200 transition-colors">Уход</a>
          <a href="#products" className="hover:text-green-200 transition-colors">Продукция</a>
          <a href="#contacts" className="hover:text-green-200 transition-colors">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;