import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

export function NextGenSection() {
  return (
    <section id="catalog" className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4">Широкий выбор продуктов</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        От отборной говядины до домашних пельменей — у нас есть всё для вашего стола. Удобный каталог, точный вес и быстрое оформление заказа.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="ShoppingBag" className="h-4 w-4" /> Заказы сегодня
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">38 заказов</div>
            <div className="text-sm text-muted-foreground">Доставка и самовывоз</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="TrendingUp" className="h-4 w-4" /> Популярные позиции
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PipelineItem label="Говядина (вырезка)" value={88} />
            <PipelineItem label="Котлеты домашние" value={74} />
            <PipelineItem label="Свинина (шея)" value={60} />
            <PipelineItem label="Пельмени ручной лепки" value={45} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Категории товаров</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {["🥩 Говядина", "🐷 Свинина", "🍗 Курица", "🥟 Полуфабрикаты", "🍖 Субпродукты"].map((cat) => (
                <div key={cat} className="flex items-center justify-between text-sm py-1 border-b border-border/30">
                  <span>{cat}</span>
                  <span className="text-primary text-xs">В наличии</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Способы получения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-orange-500 opacity-20" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-red-500 to-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-sm font-medium">Доставка<br/>или<br/>Самовывоз</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface PipelineItemProps {
  label: string
  value: number
}

function PipelineItem({ label, value }: PipelineItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted/30" />
    </div>
  )
}