import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Description = () => {
  return (
    <section id="description" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-green-800 mb-8 text-center font-display">
          Описание бройлеров
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Icon name="Zap" size={24} className="mr-2" />
                Быстрый рост
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Бройлеры - специально выведенные гибриды мясных кур, достигающие 
                товарного веса за 6-7 недель. Высокая скорость роста обеспечивает 
                быструю окупаемость инвестиций.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Icon name="Award" size={24} className="mr-2" />
                Мясные качества
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Отличный выход мяса (до 75%), нежная текстура, высокие вкусовые 
                качества. Грудные мышцы составляют до 25% живого веса птицы.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Icon name="Target" size={24} className="mr-2" />
                Эффективность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Низкая конверсия корма (1.6-1.8 кг корма на 1 кг прироста), 
                высокая выживаемость поголовья, адаптированность к промышленному содержанию.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Icon name="Shield" size={24} className="mr-2" />
                Устойчивость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Хорошая резистентность к заболеваниям, стабильные показатели 
                роста при соблюдении технологии кормления и содержания.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Description;