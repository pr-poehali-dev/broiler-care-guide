import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-100 to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-800 mb-6 font-display">
          Бройлеры премиум качества
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-body">
          Профессиональное разведение мясных кур с гарантией качества. 
          Быстрорастущие породы с отличными показателями мясной продуктивности.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
            Рост 45 дней
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
            Вес до 3 кг
          </Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
            Конверсия 1:1.8
          </Badge>
        </div>
        <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg">
          Получить консультацию
        </Button>
      </div>
    </section>
  );
};

export default Hero;