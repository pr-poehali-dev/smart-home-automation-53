import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PersonalOsSection() {
  return (
    <section id="delivery" className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Заказывайте мясо
            <br />
            не выходя из дома
          </h2>
          <p className="text-muted-foreground mb-8">
            Удобное приложение для заказа свежего мяса и полуфабрикатов. Выбирайте товары, указывайте нужный вес и оформляйте заказ за пару минут.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Статус вашего заказа</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">🟢 Заказ #1042 — в пути. Ожидайте через 45 минут</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem title="Доставка за 2 часа" />
            <FeatureItem title="Самовывоз в любое время" />
            <FeatureItem title="Отслеживание заказа" />
            <FeatureItem title="Оплата онлайн и наличными" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Новый заказ поступил
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono">
              <div className="text-green-500 mb-1">✓ Говядина (вырезка) — 1.2 кг</div>
              <div className="text-muted-foreground mb-1">✓ Котлеты домашние — 0.5 кг</div>
              <div className="text-primary">→ Доставка: ул. Ленина 42, кв. 7</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck title="Свежий продукт ежедневно" />
            <FeatureCheck title="Фото товаров в каталоге" />
            <FeatureCheck title="История заказов" />
            <FeatureCheck title="Уведомления о статусе" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string
}

function FeatureItem({ title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

interface FeatureCheckProps {
  title: string
}

function FeatureCheck({ title }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-2 bg-accent/50 rounded-md p-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}