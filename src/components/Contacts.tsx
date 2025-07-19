import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-16 px-6 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center font-display">
          Контакты и заказ
        </h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="mr-3" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={20} className="mr-3" />
                <span>info@broiler-expert.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={20} className="mr-3" />
                <span>Московская область, Серпуховский район</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={20} className="mr-3" />
                <span>Работаем: 24/7</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Гарантии качества:</h5>
              <ul className="space-y-2 text-green-100">
                <li>• Ветеринарные справки на всю птицу</li>
                <li>• Замена некондиционного поголовья</li>
                <li>• Консультации зоотехника</li>
                <li>• Техническая поддержка 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white text-gray-900 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-green-800">
              Оставить заявку
            </h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Количество голов</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="от 500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Комментарий</label>
                <textarea 
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Дополнительная информация о заказе"
                ></textarea>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;