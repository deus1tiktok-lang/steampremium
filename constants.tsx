import { FaqItem, FeatureCardProps, RoadmapItem } from './types';
import { 
  Zap, ShieldCheck, Gamepad2, MousePointerClick, Lock, Coins, MonitorPlay, Layers
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Jogos', href: '#jogos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Começar', href: '#checkout' },
];

export const FAQ_ITEMS: FaqItem[] = [
  { question: "Os jogos são originais?", answer: "Sim, todos os jogos são originais da Steam. Você recebe uma conta com a biblioteca já ativada." },
  { question: "Posso jogar online?", answer: "A maioria dos jogos permite acesso online, porém o foco principal são bibliotecas compartilhadas para modo campanha/história." },
  { question: "É seguro comprar?", answer: "100%. Utilizamos gateways de pagamento criptografados e oferecemos garantia de funcionamento." },
  { question: "Preciso pagar mensalidade?", answer: "Não! O pagamento é único e o acesso à conta é seu para sempre." },
];

export const FEATURES: Partial<FeatureCardProps>[] = [
  { title: "Economia Absurda", description: "Pare de pagar R$300 por jogo. Tenha centenas por um valor único.", icon: Coins, size: 'normal' },
  { title: "Acesso Imediato", description: "Receba os dados automaticamente no seu e-mail após a compra.", icon: Zap, size: 'tall' },
  { title: "Variedade Infinita", description: "De jogos AAA a indies aclamados. Nunca mais fique sem o que jogar.", icon: Layers, size: 'normal' },
  { title: "Sem Mensalidade", description: "Ao contrário de assinaturas, aqui você paga uma vez e joga quando quiser.", icon: Lock, size: 'normal' },
  { title: "Suporte Dedicado", description: "Equipe pronta para tirar dúvidas e ajudar na instalação.", icon: ShieldCheck, size: 'wide' },
  { title: "Compra Segura", description: "Transação protegida e garantia conforme a oferta.", icon: MonitorPlay, size: 'normal' },
];

export const GAME_LIST = [
  "Grand Theft Auto V",
  "Red Dead Redemption 2",
  "The Last of Us Part II",
  "Elden Ring",
  "Cyberpunk 2077",
  "Resident Evil 4",
  "Hogwarts Legacy",
  "Marvel's Spider-Man 2",
  "Red Dead Redemption"
];

export const CAROUSEL_GAMES = [
  { name: "Grand Theft Auto V", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg" },
  { name: "Red Dead Redemption 2", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg" },
  { name: "The Last of Us Part II", image: "https://image.pollinations.ai/prompt/The%20Last%20of%20Us%20Part%20II%20Remastered%20game%20cover%20Ellie%20angry%20face%20close%20up%20dark%20contrast?width=600&height=900&nologo=true&seed=99" },
  { name: "Elden Ring", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg" },
  { name: "Cyberpunk 2077", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg" },
  { name: "Resident Evil 4", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/library_600x900.jpg" },
  { name: "Hogwarts Legacy", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/library_600x900.jpg" },
  { name: "Marvel's Spider-Man 2", image: "https://image.pollinations.ai/prompt/Marvels%20Spider-Man%202%20game%20cover%20art%20Peter%20and%20Miles%20swinging%20red%20background?width=600&height=900&nologo=true&seed=77" },
  { name: "Red Dead Redemption", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/library_600x900.jpg" }
];

export const HOW_IT_WORKS = [
  { title: "Escolha", description: "Clique no botão 'Começar a Jogar'.", icon: MousePointerClick },
  { title: "Pagamento", description: "Finalize a compra no checkout seguro.", icon: Lock },
  { title: "Receba", description: "Receba os dados no e-mail.", icon: Zap },
  { title: "Jogue", description: "É só entrar, baixar e se divertir.", icon: Gamepad2 },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  { year: '2023', title: 'Fundação', description: 'Início das operações com foco em acessibilidade e democratização de jogos PC.' },
  { year: '2024', title: 'Crescimento', description: 'Expansão da biblioteca para 800+ títulos e automação total do sistema de entrega.' },
  { year: '2025', title: 'Ecossistema', description: 'Lançamento de aplicativo próprio e integração com serviços de nuvem.' },
  { year: '2026', title: 'Comunidade', description: 'Criação de torneios exclusivos e hub social para nossos jogadores.' },
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Mendes",
    role: "Gamer Casual",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    content: "Eu gastava cerca de 200 reais por mês em jogos. Com esse acesso, já zerei Elden Ring e Hogwarts Legacy sem pagar nada além do valor inicial. Surreal."
  },
  {
    name: "Fernanda Costa",
    role: "Streamer",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    content: "Estava com medo de ser golpe, mas o acesso chegou em 2 minutos no email. A biblioteca é gigantesca, tem jogo que eu nem sabia que existia.",
  },
  {
    name: "João V. Pedroso",
    role: "Cliente Verificado",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    content: "Melhor custo benefício que já encontrei. O suporte me ajudou a configurar o modo offline e está rodando liso no meu PC."
  }
];