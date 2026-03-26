import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          number={1}
          title="Только свежий продукт"
          description="Мясо поступает ежедневно от проверенных поставщиков. Никакой заморозки — только охлаждённое."
        />
        <FeatureCard
          number={2}
          title="Быстрая доставка"
          description="Доставим заказ в течение 2 часов по городу. Также доступен самовывоз в удобное для вас время."
        />
        <FeatureCard
          number={3}
          title="Удобный заказ онлайн"
          description="Выбирайте товары, указывайте вес и способ доставки прямо в приложении — без звонков и очередей."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  number: number
  title: string
  description: string
}

function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-accent/50 border-dashed border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium text-sm">
            {number}
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}