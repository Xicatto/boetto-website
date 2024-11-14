import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  FaCalculator,
  FaDollarSign,
  FaEnvelope,
  FaLocationDot,
  FaPeopleGroup,
  FaPhone,
} from "react-icons/fa6";
import ServiceCard from "./components/ServiceCard";
import Form from "next/form";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main>
        <section className="flex flex-row p-6">
          <div className="m-24 flex flex-1 flex-col items-start justify-center">
            <p className="mb-4 text-6xl font-semibold">
              Soluções contábies do tamanho da sua empresa
            </p>
            <p className="mb-12 text-xl">
              Conheça mais do nosso trabalho e veja como podemos te ajudar.
            </p>
            <Button className="">Fale Conosco</Button>
          </div>
          <div className="m-24 flex flex-1 items-center justify-center">
            <div>
              <Image
                className="rounded-full"
                src="/profile_square.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "512px", height: "auto" }}
                alt=""
                priority
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center p-6">
          <div className="mb-2 text-4xl font-bold">
            Nossos <span className="text-[#0256a8]">Serviços</span>
          </div>
          <div className="mb-12">Veja abaixo um resumo de nossos serviços</div>
          <div className="grid grid-flow-col grid-rows-2 gap-4 text-balance md:grid-rows-1">
            <ServiceCard
              title="Departamento Contábil"
              icon={<FaCalculator size={28} />}
            >
              <p>
                O Departamento de Contabilidade é responsável pela escrituração
                contábil, elaboração de relatórios societários, contábeis e
                gerenciais, SPED CONTÁBIL, de acordo com os princípios da
                contabilidade.
              </p>
            </ServiceCard>
            <ServiceCard
              icon={<FaPeopleGroup size={28} />}
              title="Departamento Pessoal"
            >
              <p>
                O Departamento Pessoal atua nas áreas trabalhista e
                previdenciária, para atender com qualidade e presteza, clientes
                que procuram por serviços personalizados. Nossa equipe é
                treinada e atualizada sistematicamente nessas matérias.
              </p>
            </ServiceCard>
            <ServiceCard
              icon={<FaDollarSign size={28} />}
              title="Departamento Fiscal"
            >
              <p>
                Nosso Departamento Fiscal é especializado na área de Tributária,
                sendo responsável pela escrituração dos documentos fiscais e
                apuração do IPI, PIS, COFINS, ICMS, ISS e SPED FISCAL.
              </p>
            </ServiceCard>
            <ServiceCard
              icon={<FaPeopleGroup size={28} />}
              title="Departamento Societário"
            >
              <p>
                Estudo da viabilidade na criação de empresas, verificando em
                todos os órgãos públicos se não há nenhum impeditivo na abertura
                da empresa. Assim encaminha e acompanha todo o processo
                entregando ao cliente a empresa pronta para iniciar suas
                atividades.
              </p>
            </ServiceCard>
          </div>
        </section>
        <section className="flex flex-col items-center p-6">
          <div className="mb-2 text-4xl font-bold">Fale Conosco</div>
          <p className="mb-12">
            Preencha os campos abaixo para entrar em contato
          </p>
          <div className="flex h-[520px] w-full max-w-[1024px] flex-row rounded-3xl border p-2 shadow-xl">
            <div className="flex w-[328px] flex-col rounded-2xl bg-blue-500 p-8">
              <p className="mb-2 text-xl font-semibold text-white">
                Informações de Contato
              </p>
              <p className="text-sm text-white opacity-90">
                We'll create high-quality linkable content and build at least 40
                high-authority
              </p>
              <div className="flex flex-1 flex-col justify-center gap-12 text-sm">
                <div className="flex flex-row gap-4 text-white">
                  <div>
                    <FaPhone size={24} />
                  </div>
                  <p>(16) 98250-2210</p>
                </div>
                <div className="flex flex-row gap-4 text-white">
                  <div>
                    <FaEnvelope size={24} />
                  </div>
                  <p>fiscal@boettocontabil.com.br</p>
                </div>
                <div className="flex flex-row gap-4 text-white">
                  <div>
                    <FaLocationDot size={24} />
                  </div>
                  <p>Rua Minas, 326 - Campos Elisios - Ribeirão Preto/SP</p>
                </div>
              </div>
            </div>
            <Form action="/empresa" className="flex flex-1 flex-col gap-8 p-12">
              <div className="flex flex-row gap-8">
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
              </div>
              <Input placeholder="Assunto" />
              <div className="flex flex-1">
                <Textarea className="resize-none" placeholder="Mensagem" />
              </div>
              <Button className="w-fit">Enviar Mensagem</Button>
            </Form>
          </div>
        </section>
      </main>
    </div>
  );
}
