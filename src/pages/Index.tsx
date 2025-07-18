import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Icon name="Zap" className="text-neon-pink" size={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
            NEXUS 3D
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-slate-900">
            Войти
          </Button>
          <Button className="bg-gradient-to-r from-neon-pink to-neon-cyan text-slate-900 hover:shadow-lg hover:shadow-neon-pink/50">
            Регистрация
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto">
          <Badge className="mb-6 bg-slate-800 text-neon-cyan border-neon-cyan">
            Мультиплеер онлайн
          </Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Погрузись в будущее
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Революционная 3D игра с передовой графикой и безлимитными возможностями мультиплеера
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-cyan text-slate-900 hover:shadow-lg hover:shadow-neon-pink/50">
              <Icon name="Play" className="mr-2" size={20} />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать
            </Button>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-cyan">
            Игровые возможности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-neon-pink transition-colors">
              <CardHeader>
                <Icon name="Gamepad2" className="text-neon-pink mb-4" size={40} />
                <CardTitle className="text-white">Реалистичная 3D графика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Передовые технологии рендеринга создают невероятно детализированные миры
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-neon-cyan transition-colors">
              <CardHeader>
                <Icon name="Users" className="text-neon-cyan mb-4" size={40} />
                <CardTitle className="text-white">Мультиплеер до 100 игроков</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Сражайтесь с друзьями или против них в масштабных онлайн-битвах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-neon-pink transition-colors">
              <CardHeader>
                <Icon name="Zap" className="text-neon-pink mb-4" size={40} />
                <CardTitle className="text-white">Мгновенные матчи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Продвинутый матчмейкинг находит соперников за секунды
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multiplayer Section */}
      <section className="px-6 py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-neon-pink">
                Мультиплеер нового поколения
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Объединяйтесь с игроками со всего мира в эпических 3D-сражениях. 
                Кроссплатформенная совместимость позволяет играть с друзьями независимо от устройства.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-neon-cyan" size={20} />
                  <span>Кроссплатформенная игра</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-neon-cyan" size={20} />
                  <span>Голосовой чат в реальном времени</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-neon-cyan" size={20} />
                  <span>Турниры и рейтинговые матчи</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 rounded-lg p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-cyan mb-2">100+</div>
                    <div className="text-sm text-slate-300">Игроков онлайн</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-pink mb-2">50ms</div>
                    <div className="text-sm text-slate-300">Средний пинг</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-cyan mb-2">24/7</div>
                    <div className="text-sm text-slate-300">Серверы активны</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-neon-pink mb-2">10+</div>
                    <div className="text-sm text-slate-300">Игровых режимов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-neon-cyan">
            Начни играть прямо сейчас
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Скачай игру бесплатно и погрузись в мир безграничных возможностей
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-cyan text-slate-900 hover:shadow-lg hover:shadow-neon-pink/50">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать для Windows
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Icon name="Smartphone" className="mr-2" size={20} />
              Мобильная версия
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" className="text-neon-pink" size={24} />
            <span className="font-bold text-neon-cyan">NEXUS 3D</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-neon-cyan transition-colors">
              Поддержка
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-cyan transition-colors">
              Сообщество
            </a>
            <a href="#" className="text-slate-400 hover:text-neon-cyan transition-colors">
              Новости
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;