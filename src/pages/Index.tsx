import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import Icon from '@/components/ui/icon';

interface Greenhouse {
  id: number;
  name: string;
  price: number;
  category: string;
  arches: string;
  coating: string;
  archDistance: string;
  maxLoad: string;
  dimensions: string;
  baseLength: string;
  extension: string;
  baseKit: string;
  image: string;
  popular?: boolean;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const greenhouses: Greenhouse[] = [
    {
      id: 1,
      name: 'Урожайная',
      price: 0,
      category: 'Усиленная арочная',
      arches: 'Одинарные монолитные из трубы 25х25х0,8мм по ТУ 14-105-568-93',
      coating: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
      archDistance: '100см (Псковитянка 100) / 65см (Псковитянка 65)',
      maxLoad: '200кг (Псковитянка 100) / 320кг (Псковитянка 65)',
      dimensions: '3м/2,1м; 2,5м/2,25м',
      baseLength: '4 метра',
      extension: 'Добор с шагом 2 метра',
      baseKit: '2 торца с дверьми и форточками, 5 рядов направляющих, дуги: 3 при шаге 100см, 5 при шаге 65см',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      popular: true
    },
    {
      id: 2,
      name: 'Волжанка',
      price: 0,
      category: 'Усиленная арочная',
      arches: 'Одинарные монолитные из трубы 40х20х0,7мм по ТУ 14-105-568-93',
      coating: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
      archDistance: '100см (Волжанка 100) / 65см (Волжанка 65)',
      maxLoad: '270кг (Волжанка 100) / 420кг (Волжанка 65)',
      dimensions: '3м/2,1м',
      baseLength: '4 метра',
      extension: 'Добор с шагом 2 метра',
      baseKit: '2 торца с дверьми и форточками, 5 рядов направляющих, дуги: 3 при шаге 100см, 5 при шаге 65см',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg',
      popular: true
    },
    {
      id: 3,
      name: 'Стрелка',
      price: 0,
      category: 'Каплевидная',
      arches: 'Цельносварные из трубы 25х25х0,8 мм по ТУ 14-105-568-93',
      coating: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
      archDistance: '100 см (Стрелка 100) / 65 см (Стрелка 65)',
      maxLoad: '—',
      dimensions: '3 м/2,20 м',
      baseLength: '4 метра',
      extension: 'Доборы с шагом 2 и 1 метр',
      baseKit: '2 торца, 3 дуги, 4 ряда направляющих, 2 ряда оснований, 2 двери, 2 форточки, конёк на крышу',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg'
    },
    {
      id: 4,
      name: 'Домик',
      price: 0,
      category: 'Усиленная прямостенная',
      arches: 'Одинарные, монолитные, из трубы 40х20х0,7мм по ТУ 14-105-568-93',
      coating: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
      archDistance: '100см (Домик 100)',
      maxLoad: '550кг (Домик 100)',
      dimensions: '3м/2,2м',
      baseLength: '4 метра',
      extension: 'Добор с шагом 2 метра',
      baseKit: '2 торца с дверьми и форточками, 6 рядов направляющих, дуги: 3 при шаге 100см, 5 при шаге 65см',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg'
    },
    {
      id: 5,
      name: 'Кремлёвская Сказка',
      price: 0,
      category: 'Сверхусиленная прямостенная',
      arches: 'Двойные разъемные из трубы 20х20х0,8мм по ТУ 14-105-568-93 с 20 силовыми соединителями',
      coating: 'Цинковое покрытие 140гр/м² с оцинкованным сварочным швом',
      archDistance: '100см (Сказка 100) / 65см (Сказка 65)',
      maxLoad: '580кг (Сказка 100) / 870кг (Сказка 65)',
      dimensions: '2,7м/2,0м',
      baseLength: '4 метра',
      extension: 'Добор с шагом 2 метра',
      baseKit: '2 торца с дверьми, 7 рядов перемычек со спайдерным соединением, 3 дуги при шаге 100см, 5 дуг при шаге 65см',
      image: 'https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/8313a570-8217-42fc-bf80-ed6c2be7a79d.jpg'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Купили теплицу Урожайная в прошлом году. Качество отличное, каркас крепкий. Помидоры и огурцы росли до самой осени!',
      date: 'Ноябрь 2024'
    },
    {
      id: 2,
      name: 'Владимир Николаев',
      rating: 5,
      text: 'Заказывали Кремлёвскую Сказку. Доставили быстро, помогли разгрузить. Отличный поликарбонат, прозрачный и прочный.',
      date: 'Октябрь 2024'
    },
    {
      id: 3,
      name: 'Татьяна Васильева',
      rating: 5,
      text: 'Магазин в Саранске на Рабочей — всё объяснили, помогли выбрать. Теплица служит уже 3 года без проблем!',
      date: 'Сентябрь 2024'
    }
  ];

  const filteredGreenhouses = greenhouses;

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
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/c2ffd321-78cb-4843-a8b7-4daf2109ebee.jpg" 
                alt="Логотип" 
                className="h-10 w-10 object-contain"
              />
              <h1 className="text-xl font-bold text-primary">Поликарбонат&теплицы</h1>
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
                Магазин в Саранске. Более 10 лет помогаем садоводам и фермерам Мордовии выращивать здоровые и обильные урожаи.
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
                  <CardTitle>{gh.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold">{gh.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Дуги:</span>
                      <p className="text-gray-600">{gh.arches}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Покрытие:</span>
                      <p className="text-gray-600">{gh.coating}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Расст. между дугами:</span>
                      <p className="text-gray-600">{gh.archDistance}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Макс. нагрузка:</span>
                      <p className="text-gray-600">{gh.maxLoad}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Ширина/Высота:</span>
                      <p className="text-gray-600">{gh.dimensions}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Базовая длина:</span>
                      <p className="text-gray-600">{gh.baseLength}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Удлинение:</span>
                      <p className="text-gray-600">{gh.extension}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Компл. База:</span>
                      <p className="text-gray-600">{gh.baseKit}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Узнать цену
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>


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
              <h3 className="text-4xl font-bold mb-4">Доставка и оплата</h3>
              <p className="text-gray-600 text-lg">Доставим вашу теплицу быстро и в сохранности</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="MapPin" size={32} className="text-primary mb-2" />
                  <CardTitle>Доставка по Саранску</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Бесплатная доставка при заказе от 50 000 руб. В остальных случаях стоимость рассчитывается индивидуально</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Truck" size={32} className="text-primary mb-2" />
                  <CardTitle>Доставка по Мордовии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Осуществляем доставку по всей Республике Мордовия. Стоимость зависит от расстояния и объема груза</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Store" size={32} className="text-primary mb-2" />
                  <CardTitle>Самовывоз</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Забрать товар можно самостоятельно по адресу: г. Саранск, ул. Рабочая 95а</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Условия доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong className="text-primary">Сроки доставки</strong>
                    <p className="text-gray-600 mt-1">По Саранску — 1-2 рабочих дня. По Мордовии — 2-5 рабочих дней</p>
                  </div>
                  <div>
                    <strong className="text-primary">Разгрузка</strong>
                    <p className="text-gray-600 mt-1">Водитель помогает с разгрузкой на уровне кузова. Занос на участок оплачивается отдельно</p>
                  </div>
                  <div>
                    <strong className="text-primary">Консультация по монтажу</strong>
                    <p className="text-gray-600 mt-1">Наши специалисты дадут рекомендации по установке теплицы при доставке</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Способы оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Banknote" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Наличными</strong>
                      <p className="text-gray-600 text-sm">Оплата наличными при получении товара или в нашем офисе</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Building" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Банковский перевод</strong>
                      <p className="text-gray-600 text-sm">Безналичная оплата для юридических лиц и ИП</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CreditCard" size={20} className="text-primary mt-0.5" />
                    <div>
                      <strong>Картой</strong>
                      <p className="text-gray-600 text-sm">Оплата банковской картой в офисе или при доставке</p>
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
                      <div className="font-semibold">+7 (937) 672-20-82</div>
                      <div className="text-sm text-gray-600">Пн-Пт: 9:00 - 17:00, Сб: 9:00 - 14:00</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <div>
                      <div className="font-semibold">Ooo.tri@inbox.ru</div>
                      <div className="text-sm text-gray-600">Ответим в течение часа</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <div>
                      <div className="font-semibold">Саранск, ул. Рабочая, 95а</div>
                      <div className="text-sm text-gray-600">Пн-Пт: 9:00-17:00, Сб: 9:00-14:00</div>
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
                <img 
                  src="https://cdn.poehali.dev/projects/7f2b7179-9fec-4144-acd7-b01c04fb874c/files/c2ffd321-78cb-4843-a8b7-4daf2109ebee.jpg" 
                  alt="Логотип" 
                  className="h-8 w-8 object-contain"
                />
                <h4 className="text-xl font-bold">Поликарбонат&теплицы</h4>
              </div>
              <p className="text-gray-400">
                Магазин в Саранске. Более 10 лет на рынке Мордовии
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Теплицы Урожайная</li>
                <li>Теплицы Волжанка</li>
                <li>Теплицы Стрелка</li>
                <li>Кремлёвская Сказка</li>
                <li>Поликарбонат и комплектующие</li>
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
            <p>© 2024 Поликарбонат&теплицы, Саранск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;