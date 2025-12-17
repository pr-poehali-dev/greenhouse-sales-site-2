import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Greenhouse {
  id: number;
  name: string;
  price: number;
  width: number;
  length: number;
  height: number;
  material: string;
  image: string;
  features: string[];
  popular?: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sizeFilter, setSizeFilter] = useState([0, 50]);
  const [heightFilter, setHeightFilter] = useState([0, 4]);

  const greenhouses: Greenhouse[] = [
    {
      id: 1,
      name: 'Стандарт 3x6',
      price: 35000,
      width: 3,
      length: 6,
      height: 2.1,
      material: 'Поликарбонат 4мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Оцинкованный каркас', 'UV-защита', 'Гарантия 5 лет'],
      popular: true
    },
    {
      id: 2,
      name: 'Профи 3x8',
      price: 48000,
      width: 3,
      length: 8,
      height: 2.3,
      material: 'Поликарбонат 6мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Усиленный каркас', 'Автопроветривание', 'Гарантия 7 лет'],
      popular: true
    },
    {
      id: 3,
      name: 'Мини 2x4',
      price: 22000,
      width: 2,
      length: 4,
      height: 1.9,
      material: 'Поликарбонат 4мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Компактная', 'Легкая установка', 'Гарантия 3 года']
    },
    {
      id: 4,
      name: 'Макси 4x10',
      price: 68000,
      width: 4,
      length: 10,
      height: 2.5,
      material: 'Поликарбонат 8мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Максимальная прочность', 'Система полива', 'Гарантия 10 лет']
    },
    {
      id: 5,
      name: 'Эконом 3x4',
      price: 28000,
      width: 3,
      length: 4,
      height: 2.0,
      material: 'Поликарбонат 4мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Доступная цена', 'Простая сборка', 'Гарантия 3 года']
    },
    {
      id: 6,
      name: 'Арочная 3x6',
      price: 42000,
      width: 3,
      length: 6,
      height: 2.2,
      material: 'Поликарбонат 6мм',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      features: ['Арочная форма', 'Снегоустойчивая', 'Гарантия 5 лет']
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Мария Иванова',
      rating: 5,
      text: 'Отличная теплица! Урожай томатов вырос в 2 раза. Установили за 3 часа, качество на высоте.',
      date: '15 ноября 2024'
    },
    {
      id: 2,
      name: 'Сергей Петров',
      rating: 5,
      text: 'Третий год пользуемся. Зимует отлично, поликарбонат не мутнеет. Рекомендую!',
      date: '8 ноября 2024'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      rating: 4,
      text: 'Хорошая теплица за свои деньги. Единственное - хотелось бы больше форточек для проветривания.',
      date: '2 ноября 2024'
    }
  ];

  const filteredGreenhouses = greenhouses.filter(gh => {
    const area = gh.width * gh.length;
    return area >= sizeFilter[0] && area <= sizeFilter[1] && 
           gh.height >= heightFilter[0] && gh.height <= heightFilter[1];
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">ТеплицаПро</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'reviews', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-primary transition-colors font-medium ${
                    activeSection === section ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-r from-primary/10 via-green-50 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">🌱 Сезон 2024-2025</Badge>
              <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Теплицы для богатого урожая
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Качественные теплицы из поликарбоната с гарантией до 10 лет. 
                Увеличьте урожай в 3 раза с нашими современными решениями!
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('catalog')}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Выбрать теплицу
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-primary/5"
                  onClick={() => scrollToSection('contacts')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10 лет</div>
                  <div className="text-sm text-gray-600">Гарантия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3 дня</div>
                  <div className="text-sm text-gray-600">Установка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg" 
                alt="Теплица" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Гарантия качества', text: 'До 10 лет гарантии на каркас' },
              { icon: 'Truck', title: 'Бесплатная доставка', text: 'По Москве и области' },
              { icon: 'Wrench', title: 'Монтаж за 1 день', text: 'Опытные мастера' },
              { icon: 'Award', title: 'Сертификаты', text: 'Все документы в наличии' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Каталог теплиц</h3>
            <p className="text-gray-600 text-lg">Выберите идеальную теплицу для вашего участка</p>
          </div>

          <Card className="mb-8 bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Filter" size={24} />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">
                  Площадь: {sizeFilter[0]}-{sizeFilter[1]} м²
                </Label>
                <Slider
                  value={sizeFilter}
                  onValueChange={setSizeFilter}
                  max={50}
                  step={5}
                  className="mb-2"
                />
              </div>
              <div>
                <Label className="mb-3 block">
                  Высота: {heightFilter[0]}-{heightFilter[1]} м
                </Label>
                <Slider
                  value={heightFilter}
                  onValueChange={setHeightFilter}
                  max={4}
                  step={0.1}
                  className="mb-2"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredGreenhouses.map((gh, index) => (
              <Card 
                key={gh.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {gh.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-secondary text-white">
                    🔥 Хит
                  </Badge>
                )}
                <img 
                  src={gh.image} 
                  alt={gh.name} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {gh.name}
                    <Badge variant="outline" className="font-normal">
                      {gh.width}x{gh.length} м
                    </Badge>
                  </CardTitle>
                  <CardDescription>{gh.material}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="Maximize2" size={16} />
                      Высота: {gh.height} м
                    </div>
                    <div className="space-y-1">
                      {gh.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {gh.price.toLocaleString()} ₽
                    </div>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredGreenhouses.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg">Теплицы с такими параметрами не найдены</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSizeFilter([0, 50]);
                  setHeightFilter([0, 4]);
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Отзывы клиентов</h3>
            <p className="text-gray-600 text-lg">Что говорят наши покупатели</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Доставка и установка</h3>
              <p className="text-gray-600 text-lg">Работаем по всей России</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="MapPin" size={32} className="text-primary mb-2" />
                  <CardTitle>Зона доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Москва и МО:</strong> Бесплатная доставка
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>До 200 км:</strong> 30 ₽/км
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>По России:</strong> Транспортной компанией
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Wrench" size={32} className="text-primary mb-2" />
                  <CardTitle>Установка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Монтаж:</strong> От 5000 ₽
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Срок:</strong> 1-3 дня
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Гарантия:</strong> На работы 2 года
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Свяжитесь с нами</h3>
              <p className="text-gray-600 text-lg">Ответим на все вопросы и поможем с выбором</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <div>
                      <div className="font-semibold">+7 (495) 123-45-67</div>
                      <div className="text-sm text-gray-600">Ежедневно 9:00 - 21:00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <div>
                      <div className="font-semibold">info@teplica.pro</div>
                      <div className="text-sm text-gray-600">Ответим в течение часа</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <div>
                      <div className="font-semibold">Москва, ул. Садовая, 15</div>
                      <div className="text-sm text-gray-600">Пн-Вс 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea id="message" placeholder="Ваш вопрос или комментарий" rows={3} />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" className="text-primary" size={28} />
                <h4 className="text-xl font-bold">ТеплицаПро</h4>
              </div>
              <p className="text-gray-400">
                Качественные теплицы для вашего урожая
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Теплицы из поликарбоната</li>
                <li>Арочные теплицы</li>
                <li>Теплицы-домики</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Мы в соцсетях</h5>
              <div className="flex gap-4">
                <Icon name="Facebook" className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 ТеплицаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
