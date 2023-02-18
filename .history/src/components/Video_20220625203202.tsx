import { DiscordLogo, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - Abertura do Ignite Lab
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero quam inventore culpa perspiciatis ad nam explicabo molestiae impedit vel, magnam sequi officia. Consectetur delectus quod, ipsa tempore sequi ullam.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-blue-500" 
                                src="https://github.com/diego3g.jpg" 
                                alt="" 
                            />
                        </div>
                        <div>
                            <strong className="font-bold text-2xl block">Diego Fernandes</strong>
                            <span className="text-gray-200 text-sm block">CTO @Rocketseat</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do discord
                        </a>
                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-green-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    )
}