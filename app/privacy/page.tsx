import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">Última atualização: 7 de março de 2025</p>

          <h2 className="mt-10 text-2xl font-bold">1. Introdução</h2>
          <p>
            Na CalmDev, respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta
            Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você
            utiliza nossos serviços.
          </p>

          <h2 className="mt-10 text-2xl font-bold">2. Informações que Coletamos</h2>
          <p>Coletamos vários tipos de informações de e sobre os usuários de nossos serviços, incluindo:</p>
          <ul className="list-disc pl-6">
            <li>Identificadores pessoais como nome, endereço de e-mail, número de telefone e nome da empresa</li>
            <li>Dados de uso, incluindo como você interage com nossos serviços</li>
            <li>Informações do dispositivo, como endereço IP, tipo de navegador e sistema operacional</li>
            <li>Cookies e tecnologias de rastreamento similares</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">3. Como Coletamos Informações</h2>
          <p>Coletamos informações diretamente de você quando você:</p>
          <ul className="list-disc pl-6">
            <li>Registra uma conta</li>
            <li>Assina nossa newsletter</li>
            <li>Solicita uma consulta</li>
            <li>Preenche um formulário em nosso site</li>
            <li>Utiliza nossos serviços</li>
          </ul>
          <p>
            Também coletamos informações automaticamente enquanto você navega por nossos serviços através de cookies e
            tecnologias similares.
          </p>

          <h2 className="mt-10 text-2xl font-bold">4. Como Usamos Suas Informações</h2>
          <p>Usamos as informações que coletamos para:</p>
          <ul className="list-disc pl-6">
            <li>Fornecer, manter e melhorar nossos serviços</li>
            <li>Processar transações e enviar informações relacionadas</li>
            <li>Enviar informações administrativas, como atualizações, alertas de segurança e mensagens de suporte</li>
            <li>Responder a seus comentários, perguntas e solicitações</li>
            <li>Personalizar sua experiência e entregar conteúdo relevante para seus interesses</li>
            <li>Monitorar e analisar tendências, uso e atividades em conexão com nossos serviços</li>
            <li>Detectar, prevenir e resolver problemas técnicos</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">5. Divulgação de Suas Informações</h2>
          <p>Podemos divulgar suas informações pessoais para:</p>
          <ul className="list-disc pl-6">
            <li>Nossas subsidiárias e afiliadas</li>
            <li>Contratados, prestadores de serviços e outros terceiros que usamos para apoiar nossos negócios</li>
            <li>
              Um comprador ou outro sucessor no caso de fusão, alienação, reestruturação, reorganização, dissolução ou
              outra venda ou transferência de alguns ou todos os ativos da CalmDev
            </li>
            <li>Cumprir a finalidade para a qual você a fornece</li>
            <li>
              Cumprir qualquer ordem judicial, lei ou processo legal, incluindo responder a qualquer solicitação
              governamental ou regulatória
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">6. Segurança de Dados</h2>
          <p>
            Implementamos medidas projetadas para proteger suas informações pessoais contra perda acidental e contra
            acesso, uso, alteração e divulgação não autorizados. No entanto, a transmissão de informações pela internet
            não é completamente segura. Embora façamos o nosso melhor para proteger suas informações pessoais, não
            podemos garantir a segurança de suas informações pessoais transmitidas aos nossos serviços.
          </p>

          <h2 className="mt-10 text-2xl font-bold">7. Seus Direitos</h2>
          <p>
            Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, como:
          </p>
          <ul className="list-disc pl-6">
            <li>O direito de acessar suas informações pessoais</li>
            <li>O direito de retificar informações pessoais imprecisas</li>
            <li>O direito de solicitar a exclusão de suas informações pessoais</li>
            <li>O direito de restringir o processamento de suas informações pessoais</li>
            <li>O direito à portabilidade de dados</li>
            <li>O direito de se opor ao processamento de suas informações pessoais</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">8. Cookies</h2>
          <p>
            Usamos cookies e tecnologias de rastreamento similares para rastrear atividades em nossos serviços e
            armazenar certas informações. Você pode instruir seu navegador a recusar todos os cookies ou a indicar
            quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não conseguir usar
            algumas partes de nossos serviços.
          </p>

          <h2 className="mt-10 text-2xl font-bold">9. Privacidade de Crianças</h2>
          <p>
            Nossos serviços não são destinados a crianças menores de 16 anos, e não coletamos intencionalmente
            informações pessoais de crianças menores de 16 anos. Se soubermos que coletamos ou recebemos informações
            pessoais de uma criança menor de 16 anos sem verificação do consentimento dos pais, excluiremos essas
            informações.
          </p>

          <h2 className="mt-10 text-2xl font-bold">10. Alterações em Nossa Política de Privacidade</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Se fizermos alterações materiais em
            como tratamos as informações pessoais de nossos usuários, notificaremos você através de um aviso em nosso
            site. A data em que a Política de Privacidade foi revisada pela última vez está identificada no topo da
            página.
          </p>

          <h2 className="mt-10 text-2xl font-bold">11. Informações de Contato</h2>
          <p>
            Para fazer perguntas ou comentar sobre esta Política de Privacidade e nossas práticas de privacidade, entre
            em contato conosco pelo e-mail privacy@calmdev.com.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/terms">Ver Termos de Uso</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

