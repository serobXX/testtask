export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: "PieChart",
    title: "Анализ текущего состояния карьеры",
    description: "Получите четкую оценку вашей карьеры и создайте стратегию для дальнейшего развития"
  },
  {
    id: 2,
    icon: "Search",
    title: "Поиск работы",
    description: "Эффективный поиск подходящих вакансий и продвижение для трудоустройства"
  },
  {
    id: 3,
    icon: "FileText",
    title: "Сопроводительные письма и резюме",
    description: "Создание эффективных, профессиональных резюме, которые выделят вас среди других кандидатов"
  },
  {
    id: 4,
    icon: "Presentation",
    title: "Тренинг по презентации личного бренда",
    description: "Развитие навыков самопрезентации и построение сильного личного бренда"
  },
  {
    id: 5,
    icon: "Users",
    title: "Подготовка к собеседованию",
    description: "Научим отвечать на любые вопросы и подготовим к собеседованию"
  },
  {
    id: 6,
    icon: "Target",
    title: "Рекомендации на базе STEMPS Career",
    description: "Получение персональных рекомендаций для профессионального развития"
  }
];