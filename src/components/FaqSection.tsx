import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12" id="faq">Частые вопросы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ? Позвоните нам или напишите в WhatsApp — поможем быстро.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Как оформить заказ?"
              answer="Выберите товары в каталоге, укажите нужный вес и адрес доставки, оплатите онлайн или наличными при получении. Всё просто!"
            />
            <FaqItem
              question="Как быстро доставите?"
              answer="Доставляем в течение 2 часов по городу. Точное время зависит от вашего района — уточним при подтверждении заказа."
            />
            <FaqItem
              question="Можно забрать самовывозом?"
              answer="Конечно! Самовывоз доступен ежедневно. После оформления заказа мы сообщим, когда всё будет готово."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Мясо точно свежее?"
              answer="Да! Мясо поступает ежедневно от проверенных поставщиков. Мы работаем только с охлаждённым, а не замороженным продуктом."
            />
            <FaqItem
              question="Какой минимальный заказ?"
              answer="Минимальная сумма заказа — 500 ₽. Бесплатная доставка от 1500 ₽."
            />
            <FaqItem
              question="Можно выбрать точный вес?"
              answer="Да, при оформлении заказа вы указываете желаемый вес. Мы нарежем точно или минимально отклонимся — всегда в вашу пользу."
            />
            <FaqItem
              question="Как оплатить заказ?"
              answer="Принимаем оплату картой онлайн, наличными курьеру или при самовывозе. Всё удобно и безопасно."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}