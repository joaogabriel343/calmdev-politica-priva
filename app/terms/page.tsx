import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">Termos de Uso</h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">Última atualização: 7 de março de 2025</p>

          <h2 className="mt-10 text-2xl font-bold">1. Introdução</h2>
          <p>
            Bem-vindo à CalmDev ("Empresa", "nós", "nosso", "nos")! Estes Termos de Uso regem o uso do nosso site e
            serviços. Ao acessar ou usar nossos serviços, você concorda em estar vinculado a estes Termos.
          </p>

          <h2 className="mt-10 text-2xl font-bold">2. Descrição dos Serviços</h2>
          <p>
            A CalmDev é uma empresa de tecnologia que fornece desenvolvimento de software, consultoria e serviços de
            transformação digital. Nossa plataforma oferece várias soluções tecnológicas projetadas para ajudar empresas
            a melhorar suas operações e presença digital.
          </p>

          <h2 className="mt-10 text-2xl font-bold">3. Registro de Conta</h2>
          <p>
            Para acessar determinados recursos dos nossos serviços, pode ser necessário registrar uma conta. Você
            concorda em fornecer informações precisas, atuais e completas durante o processo de registro e em atualizar
            essas informações para mantê-las precisas, atuais e completas.
          </p>

          <h2 className="mt-10 text-2xl font-bold">4. Responsabilidades do Usuário</h2>
          <p>
            Você é responsável por manter a confidencialidade das suas credenciais de conta e por todas as atividades
            que ocorrem sob sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado da
            sua conta ou qualquer outra violação de segurança.
          </p>

          <h2 className="mt-10 text-2xl font-bold">5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, recursos e funcionalidades dos nossos serviços, incluindo, mas não se limitando a texto,
            gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software,
            são propriedade exclusiva da CalmDev ou de seus licenciadores e são protegidos por direitos autorais, marcas
            registradas e outras leis de propriedade intelectual.
          </p>

          <h2 className="mt-10 text-2xl font-bold">6. Conteúdo do Usuário</h2>
          <p>
            Você mantém todos os direitos sobre qualquer conteúdo que enviar, postar ou exibir em ou através dos nossos
            serviços. Ao enviar, postar ou exibir conteúdo em ou através dos nossos serviços, você nos concede uma
            licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir,
            modificar, adaptar, publicar, traduzir, criar trabalhos derivados, distribuir e exibir tal conteúdo em
            qualquer mídia.
          </p>

          <h2 className="mt-10 text-2xl font-bold">7. Usos Proibidos</h2>
          <p>
            Você concorda em não usar nossos serviços para qualquer finalidade ilegal ou de qualquer forma que possa
            danificar, desativar, sobrecarregar ou prejudicar nossos serviços. Você também concorda em não tentar obter
            acesso não autorizado a qualquer parte dos nossos serviços, outras contas, sistemas de computador ou redes
            conectadas aos nossos serviços.
          </p>

          <h2 className="mt-10 text-2xl font-bold">8. Rescisão</h2>
          <p>
            Podemos encerrar ou suspender sua conta e acesso aos nossos serviços imediatamente, sem aviso prévio ou
            responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos. Após a
            rescisão, seu direito de usar nossos serviços cessará imediatamente.
          </p>

          <h2 className="mt-10 text-2xl font-bold">9. Limitação de Responsabilidade</h2>
          <p>
            Em nenhum caso a CalmDev, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão
            responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo,
            sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu
            acesso ou uso ou incapacidade de acessar ou usar nossos serviços.
          </p>

          <h2 className="mt-10 text-2xl font-bold">10. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for
            material, forneceremos pelo menos 30 dias de aviso antes que quaisquer novos termos entrem em vigor. O que
            constitui uma mudança material será determinado a nosso exclusivo critério.
          </p>

          <h2 className="mt-10 text-2xl font-bold">11. Lei Aplicável</h2>
          <p>
            Estes Termos serão regidos e interpretados de acordo com as leis da jurisdição em que a CalmDev está
            estabelecida, sem considerar suas disposições sobre conflitos de leis.
          </p>

          <h2 className="mt-10 text-2xl font-bold">12. Contate-nos</h2>
          <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail legal@calmdev.com.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/privacy">Ver Política de Privacidade</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

