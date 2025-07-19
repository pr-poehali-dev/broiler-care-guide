import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Products = () => {
  return (
    <section id="products" className="py-16 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-green-800 mb-12 text-center font-display">
          Наша продукция
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-green-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Icon name="Egg" size={24} className="mr-2" />
                Суточные цыплята
              </CardTitle>
              <CardDescription>Здоровый молодняк с гарантией</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Привитые суточные цыплята от ведущих племзаводов. 
                Гарантия выживаемости 96%.
              </p>
              <div className="text-2xl font-bold text-green-700 mb-2">от 85 ₽/шт</div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Заказать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Icon name="Timer" size={24} className="mr-2" />
                Подрощенная птица
              </CardTitle>
              <CardDescription>2-3 недели, готова к откорму</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Цыплята 14-21 день с пройденным критическим периодом. 
                Привиты, адаптированы.
              </p>
              <div className="text-2xl font-bold text-green-700 mb-2">от 180 ₽/шт</div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Заказать
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Icon name="Package" size={24} className="mr-2" />
                Товарная птица
              </CardTitle>
              <CardDescription>Готовая к убою, 6-7 недель</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Откормленные бройлеры весом 2.5-3 кг. 
                Убой и переработка на собственной площадке.
              </p>
              <div className="text-2xl font-bold text-green-700 mb-2">от 320 ₽/кг</div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Заказать
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border-2 border-green-200">
          <h4 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Логистика и доставка
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                <Icon name="Truck" size={20} className="mr-2" />
                Условия транспортировки
              </h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Специализированный транспорт с вентиляцией</li>
                <li>• Контроль температуры во время перевозки</li>
                <li>• Минимальная партия: 500 голов</li>
                <li>• Документооборот: справки ф.1 и ф.4</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2" />
                География доставки
              </h5>
              <ul className="space-y-2 text-gray-700">
                <li>• Московская область: бесплатно от 1000 гол</li>
                <li>• Центральный регион: 15 ₽/км</li>
                <li>• Другие регионы: по согласованию</li>
                <li>• Самовывоз: круглосуточно</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;