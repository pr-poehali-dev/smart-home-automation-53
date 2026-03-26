import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Хотите свежего мяса?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Сделайте первый заказ прямо сейчас — доставим свежее мясо и полуфабрикаты к вашему столу. Быстро, удобно, вкусно!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          Сделать заказ
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Позвонить нам
        </Button>
      </div>
      <div className="mt-6 text-xs text-muted-foreground/70 space-y-1">
        <p>🚚 Нижегородский район — доставка ежедневно с 09:00 до 17:00, приём заказов с 07:00 до 15:00</p>
        <p>📍 Другие районы — по договорённости, в зависимости от удалённости от магазина</p>
      </div>
    </section>
  )
}