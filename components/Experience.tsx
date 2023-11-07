import IbHub from "@/assets/svg/IbHub"
import { STRINGS } from "@/utils/strings"

const Experience = (props: { customCSS: string }) =>{
return <ol className={`${props.customCSS} py-8 lg:py-16 px-4 mx-auto max-w-screen-md border-l border-gray-200 dark:border-gray-700`}>                  
   <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className="rounded-full shadow-lg">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img  height={50} width={50} src='data:image/png;base64,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' alt='Ninjacart'/>
            </div>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Bangalore</time>
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Jul 2023 – present</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Software Development Engineer  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">@Ninjacart</a></div>
            </div>
            {STRINGS.Experience_1.length>0 && STRINGS.Experience_1.map((str)=>{
                return <div key={str} className="m-3 p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{str}</div>
            })}
        </div>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className="rounded-full shadow-lg">
            {/* <IbHub height={100} width={150}/> */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img  height={50} width={50} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHaElEQVR4AaVWA3hcTRS9b+N098W2uYqd32Ztt3FtxPlt1bZt27atpAjqNtn/TDKbvlrn+2af7z33nDszSy9DtJuBsKtTHZNLAxTa0lyxe1meOONWgXjsZoFYdqdQfIjzexgluN5VmicOup4jNj/fV+G2uqO5jN4WR7rLTUqyFe8i6UgkO3evSKy8/52F7nkDz3V3i8S7twvEPfgm+8oAhf+alDcgMrulmXC+n8ILQf68WyheQ+CaBDVJqpCkDOMCSJ3EOIN3illiPJOSqbpdKB66kSt2ON5LrrCrI9ArYVumuQxVJ0PWzSyIvjIkKr6ZL86AxJ2LByrirwxU+KFCd5x7YijxzZfleeJ3+G4DyNy+V1RDhJ2X5YvDjg+wcFE5yV7MYl2GjQwJPkeyE0iKxNUBSisQAMliDnSTmzYINXhukKnNzITjPeXW13MUjUBkDWI8KPnBSjf0X+/KlKEh89/7T+VTx83sOd97txUmdNAkVxRYntRXDQkPXstRNDzSQ25Kr4GfPjMRzvRROMDCorl/uJW+OyFSlzghsiphbMTcmEEaJ+GZNQT396r7WfPN1/JsqytHV2+FzOGrOsK8N8TRHnKT7L/8UpLHR15LmhjFSDxMGBMxOOoftZykoMCeJqTM/10enlvVs9FXutkZmkMHejlG/fmFqUBvifd/DzWOHxmeieTlnMQtXHdU5wXx2WGAJCHZSaQqKiH19zpSF5UZqQY2Enza1yaP/k9jGT86vF7ciPAPI39XGtMrwPoDNyMMAwIi/1CZxo8Kz0Pye9UkxkUejBmi9aNq+Hdm1Q8j1Xe66qEsGAlFaj1nfuHjDHx8N3F8ZEncyPBvVDmBL1TGsaGfgXPLwEbOLQKVkiKs0QOzE3k/oKAidU4gCIYM0KD6c6x6HIspZGAsSWAoNyQkHszl0yWMi9gcM0jrRi+AS5tgL7cOoatc24cU2H/jXSO1jIS44WFJrAjEQpzIQyDlSxSa1xmVVzICqH4GBXQzfZIAEg9hH3ESlWD/Y8RvSiN6DpC8gVuK8jTGWqhgQxyRv6tM0ISjuQoPYGkmQf5pNdWDRGhuFlmFC08rwAnwgevi2GFhH3k2dHnKCttPPGSu7UKyUf1mjO1QI4IkgIV19b0AMrOIVIXHOYEyNCOX//kK6K2Anysxp+2f8r+Bn7F7qnIWqj/nnqYsgxr1SQLY54cmPMviIMYhRqCc+38O/eDzIgJcukp+/gBWDAj/KdSQJHCo72vq1lE53y1VeRFEKqBGY5IANlgg8SY+G4oJlVdx/w+RfxenpwgoHhGA9JXwbTmu7/Dr87AizsD00Rpv97mnIZL+Cfl3oPq9Lq2DkkmCqL/U5iCwiitQSqj8ISdwhAJ6OL+MACRMg3dTuRrVPiKoSBxiuL3g1jG0Fyw4g3EYPRBAEmBNsMFM2skVuMQsKOUWnMcU9HuhBYzAYG0zVB2B89PcittY2dprCoJrVYACWpDYCgX+c2zsb0wSxA4NU7Mm5grsYgSO8iYsRxMmvAqBiF+UBlicuuH+ff3KFjtEG2SkMBQIcGoaYOjSKugj55ZB/kY2j5bzkB5+AmZBOusjpl786IhRbBpO5gSqsCZ0Ifv3nj0NJQQIiPpbbYsKFiY+2unGR/+rqbXCxEUusEES4LkD3lvPY93EwlQXBPIykJz3QeFsCuhu9jIFCDB1MGErWzLuXeJW3IUqfSN+VZrQM4CFi+0HuWz2JE2oln9l9D9qa7YUK+H/Gd4HJeiD+Bc2ISfAwKYg/B/IgnISpZiavaCOpU24pUCAR2MXAdfWaNbe+L6MxynHbGockO4lEKaeMWbAYMlmNIYCe5k9ay/A8SEINCVAssnYsZnAbNArgeoWo9osJGmGYw9WLbvPn9+D979iNkiUDsmOZxtR7YoYmtOMfDNkBAjoKzROZ9ZwbCPBNppIEjAr0ID+SLJcv0hJFy12lNyrANnfov/RWJEU8B0q5P+i35RA5pgAUk5u7QQC4JVV7FBtS4zP4aUxPQH/NC8B64NHwuiIv1lPMDWkRFjDYfdbzxSJ+lNlTs9EcH93TMm1eivMQwr29LLuHD+LGsnoFYFl1hhqaNEXXaHIICQdAgtysG58HD1IY6N+4f8I98YC24xA4ggj4BBUqJtp2uXoLkppsoxagPWrYwR9Jaym1g6bqL1q6et8K/ikyCwDsz+K9s4+nGfdW7dfyNIdosyKvZQ2djt1TFpMzc1/pY+eW8UEqivbQG2ddlJK6wOUsfEgZVzZTal9plMDA3pV/GBYV7ZOSIndTxlrD1Nm5RHK0uHIiFzfR+nz9lBa1x3U8YNt1CF0A7Xz3ULtg0AuegelNMazn5B4F96/p/9uP6XPAXETeh38Sh8KCO6KgD+jisssEAsoIXMbo/gQZZzH8TJGKe4/eOK9h4wM1PhyLH0r0JtgETUz2kod4vZR2nAQOSVN8qzByd1C4q2Qvvd6aus+gxoK9LaYT02N0VDBqCYT/TANsu5lyuB4DclKcH4W9mzAs8Gwp+5aauM4nuq+UuL/AUS3Bv+OhNAcAAAAAElFTkSuQmCC' alt='Ninjacart'/>
            </div>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Bangalore</time>
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Jan 2023 – Jun 2023</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Software Development Engineer Intern  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">@Ninjacart</a></div>
            </div>
            {STRINGS.Experience_2.length>0 && STRINGS.Experience_2.map((str)=>{
                return <div key={str} className="m-3 p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{str}</div>
            })}
        </div>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className="rounded-full shadow-lg">
            <IbHub customClass="rounded-full" height={50} width={150}/>
            </div>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Hyderabad</time>
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Feb 2022 – Nov 2022</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Program Associate Mentor  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">@NxtWave</a></div>
            </div>
            {STRINGS.Experience_3.length>0 && STRINGS.Experience_3.map((str)=>{
                return <div key={str} className="m-3 p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{str}</div>
            })}
        </div>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className="rounded-full shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="rounded-full" src='https://yt3.ggpht.com/ytc/APkrFKaoLeU5vFh0ehpWytGgDF4Kc7oFGzNijWEaVXk4=s68-c-k-c0x00ffffff-no-rj' alt='IIT J'/>
            </div>
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div className="items-center justify-between mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">IIT Jodhpur</time>
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Jul 2021 – Sept 2021</time>
                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Frontend Developer [open source contribution]  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">@IIT Jodhpur</a></div>
            </div>
            {STRINGS.Experience_4.length>0 && STRINGS.Experience_4.map((str)=>{
                return <div key={str} className="m-3 p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{str}</div>
            })}
        </div>
    </li>
    
</ol>

}

export default Experience