import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1900px] flex-1 px-4 lg:px-10">
            <div className="@container">
              <div className="flex flex-col gap-8 py-10 @[864px]:flex-row @[864px]:items-center">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video @[864px]:aspect-square bg-cover rounded-xl @[480px]:h-auto @[864px]:flex-1 shadow-2xl"
                  data-alt="Rider and horse in mountain landscape"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tw3CECn20OiqosDWH48uvWu1aGvCUzb-czs-IHXdAtofBWHc1EQZ-pT9hSwHmD-YRoUmJW9_0F__QORV1Q_m4GlCJeR-eIjBQlfFP1qih1EYTfERKNZZ3y_-C5mGm8cYWp0VFGGYuOpiHlqK6kQBdk8gSgU4hoE6yQ63ZSTwfZHoQif7rz-0hz8i8vBJK9OhfSWDsEcSWjv4ig2qxfOt0Sw5kpBlK7IC2BT0bcH58FZWOV0X6IgCoyP_bxEY_DNupGTbKllvUGiV")`,
                  }}
                ></div>
                <div className="flex flex-col gap-6 @[864px]:flex-1 @[864px]:pl-8">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-color-light text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                      Encuentra el equipo perfecto para ti y tu caballo
                    </h1>
                    <h2 className="text-[#668863] text-lg font-normal leading-relaxed max-w-[500px]">
                      Eleva tu experiencia de jinete con equipo ecuestre
                      técnicamente avanzado diseñado para el rendimiento y la
                      comidad suprema
                    </h2>
                  </div>
                  <div className="flex flex-col @[480px]:flex-row gap-4">
                    <button className="text-[#000000] flex min-w-[160px] cursor-pointer items-center justify-center over-flow-hidden rounded-xl h-14 px-6 bg-primary text-[#122111] text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                      <span className="truncate">Comenzar Fit Finder</span>
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 border-1 border-[#121811] text-[#121811] text-lg font-bold leading-normal hover:bg-[#121811]/5 transition-colors">
                      Ver Catalogo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-[#121811] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 border-l-4 border-primary">
                Explorar por Categoria
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              <div
                className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-[4/5] overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOetPNWVUmlscFm-_bsSaXCjwkTaIVfr8fsYVvorb40_Mki6aKnuw6SGQI8xQcF-aI2xxmHeX1SXW6pgqWlXTPgf6GAa-HKJwgtZE4Pe9hRFDS7W_jlgidolAAmVUARq2diBAwXq8edaxP6ayRVqonb6avJM2NH8hp193Ww414cPx-QXg_zWrYGAzVoQcdWzrA3EARv84PuLBZd7nUsV_xF-J5S4SuzaBGMBYXwX-jf6MivkgPTbpGD1W8JjO1UMhUKilPO9gea4bZ")`,
                }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-white text-2xl font-bold leading-tight line-clamp-2 transform group-hover:translate-x-2 transition-transform">
                  Cascos
                </p>
                <p className="text-white/80 text-sm">
                  Protección de élite con estilo
                </p>
              </div>

              <div
                className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-[4/5] overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn2WF2ZmHsAwJ6Xv2h9u1xmlSt4mZI4Gzjq20psWdtf7AutRUivWptbD5DZAfDG94eLm__4IMrRMsakrWY5wo16e-nK4iMrbBNCsV1bIC4sjBKwU2tXEPdMJ4PzwK-HaLuSn0zWDgHEu04eLqNCcJuq95_wmMvXIYY6A4fQ3unRfUmAhiUStYz0I6nEpQYI1C9Z3pvocDJ08yT_S3NmRsPP-8dC57BvyTFlYzKX7PZVzZy2qG9nNvQUl5sPCTWRf4DXX0NqQFQNbyF")`,
                }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-white text-2xl font-bold leading-tight line-clamp-2 transform group-hover:translate-x-2 transition-transform">
                  Botas
                </p>
                <p className="text-white/80 text-sm">
                  Ergonomía y durabilidad cuero
                </p>
              </div>

              <div
                className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-[4/5] overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuix-mKcUWpEMkIfverV8DZ8KsEj-mUwbLu0d2VAPSuOn1mpgb0MtZ6kA8IPeY3U9SJgm6yY9cGF0tYeTwRY7TJCisSCfTagYCOlNe7-msc8EIBtIHXExX3qY8v-Rx0ufBKOMKM32ZXJlEXTjqJSpYXYQBzpLOiuBVS0rB7q16M5Y4OEzR4tspZf6RQZKeQvjGr1P7eELP4QbAD2RLK0l4F7kooraSBg8snGpSuc1utvtPgplD0xZKMJj3A0x1dSBWdKejgTxXMg58")`,
                }}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-white text-2xl font-bold leading-tight line-clamp-2 transform group-hover:translate-x-2 transition-transform">
                  Sillas de Montar
                </p>
                <p className="text-white/80 text-sm">
                  Confort máximo para tu caballo
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-20 @container">
              <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="text-[#121811] tracking-light text-[32px] font-bold leading-tight @[480px]:text-5xl @[480px]:font-black max-w-[800px]">
                  ¿Por qué elegir EquiFit?
                </h1>
                <p className="text-[#668863] text-lg font-normal leading-normal max-w-[720px]">
                  Combinamos la artesanía tradicional con la tecnología moderna
                  para proteger lo que más importa.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-white shadow-sm border border-[#f1f4f0]">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden group"
                    data-alt="Abstract technology visualization"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoP1_EtTwUnTfioHJBZ26_84XTrggmE_UKZdoX-7BoYtllilTaxhi2KAXAogPN9xpiwYe7KGOebcaEuC873nfJJa-HFdAerRKfxvZnt0X68n_4YmvERZsCP9Ceac2ouIjYQs5ynZwhV7qOQfyMvUHTKjHmNgncV0RS_fpIlx19BpHHvDiykJEEH7wAOexxh8C2Qw7ziFqZooEUQF9ytLasITPnPTrMLrsJmu2dyiHs7O20_0zu_07HWd7j33Y-lPUqXsebFaC-Skqw")`,
                    }}
                  >
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-[#122111]">
                        biotech
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#121811] text-xl font-bold leading-normal mb-2 text-center">
                      Tecnología Fit Finder
                    </p>
                    <p className="text-[#668863] text-base font-normal leading-relaxed">
                      Nuestro algoritmo garantiza el ajuste perfecto tanto para
                      el jinete como para el caballo, reduciendo puntos de
                      presión.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-white shadow-sm border border-[#f1f4f0]">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden group"
                    data-alt="Eco friendly materials close up"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCimj6o2_wTrmgYoW0Hk8vQZR9aIIYJQkqCqfB0VipZlUAiBrdu6JqThY8y2Usz5gQquXR__zgXInzXUCcnX5WSd8Vcak4hi8Gt1KyKCSv7W1CLBgqfXcIHc7kYRiuV7NJiFg4toablv6ciLpbRVcJOBgbnQOiFEujd1IDNoy2e8fOIjt8XX3ywRNoinxsxhy5i9szydKzx27nqyGDnEDieI06dsgmBOnEgUd5efIDsnsllwlGKgfWaP7rwCuuKWxyP-SWEYUtCd4WU")`,
                    }}
                  >
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-[#122111]">
                        eco
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#121811] text-xl font-bold leading-normal mb-2 text-center">
                      Materiales Ecológicos
                    </p>
                    <p className="text-[#668863] text-base font-normal leading-relaxed">
                      Abastecimiento sostenible con tonos tierra y fibras
                      naturales duraderas que respetan el medio ambiente y la
                      piel del animal.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 p-6 rounded-2xl bg-white shadow-sm border border-[#f1f4f0]">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden group"
                    data-alt="Eco friendly materials close up"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSXYwzKbO4cul8MMt2FT6OzDcZJhjULERxhILr1hRGStppPnNVDC0VHbNDsH6B1n6IiZSePW6stWXditinhQMNkcDrbZ_De16qV-IoN6DU408Pb7RZ9lb2UManaV9SfMaY4mw3eHXFdEL04UkqkpyBZZa3LGwzfnC3dMq-jrCLhALHdYm_iPc5w5aOkhWvwx69Ued_zwX3ojNMk5PxyvmbygjNx8E9ftP0Uob1r3NCbE0rYtPVDip2Xtugnrt95wY1GJlMRx24qy3G")`,
                    }}
                  >
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-4xl text-[#122111]">
                        speed
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#121811] text-xl font-bold leading-normal mb-2 text-center">
                      Alto Rendimiento
                    </p>
                    <p className="text-[#668863] text-base font-normal leading-relaxed">
                      Probado por jinetes profesionales en las condiciones más
                      exigentes para asegurar la máxima respuesta en
                      competencia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
