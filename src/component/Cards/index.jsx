import "./styles.css"
import React from 'react'

function PackageCard() {
  return (
    <div>packageCard</div>
  )
}




function CardPrimary() {
    return (
        <>
            <div className="w-full max-w-[250px] h-[auto] p-[20px] rounded-[15px] bg-[#fff] flex justify-between m-[10px]" style={{ boxShadow: "1px 1px .4rem #d3d3d3" }}>
                <div className="w-full h-auto bg-[#fff]">
                    <p className="m-[0] text-[14px] text-[#67748e] tracking-[-0.025rem] font-semibold">Today Money</p>
                    <h2 className="text-[#121212] text-[1.3em] tracking-[-0.025rem] font-bold">$53,000 <span className=" tracking-[-0.025rem] font-bold text-[13px] text-[green]">+55%</span></h2>
                </div>
                <div className="w-full max-w-[50px] h-[50px] rounded-[10px]  bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>
        </>
    )
}


function CardSecondary() {
    return (
        <div className="w-full min-w-[560px] max-w-[600px] h-[auto] p-[20px] rounded-[15px] bg-[#fff] flex flex-col justify-between m-[10px]" style={{ boxShadow: "1px 1px .4rem #d3d3d3" }}>
            <div className="w-full h-auto ">
                <h1 className="font-semibold text-[20px] text-[#343767] tracking-[-0.025em]">Sales by Country</h1>
            </div>
            <div className="w-full h-auto pb-[10px] pt-[10px] border-b-1 border-[#96a0b1] flex mt-[10px]">
                <div className="w-full max-w-[70px] h-auto flex items-center ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAAAAXNSR0IArs4c6QAABRpJREFUOBGVVFtsFFUY/mZ2Lnvf7qXLtmxboLRLu7SF0tIWFKGQBqFqMG7UBCTxQsAHExONPPiATyQmEuHBpIk+oUAwoAYTQLFqpDb0fr/Quu3S3e12t91rZ3dmZ3fHQxNffNI/OefknJn58n3/982h8D+ra2CANY94DWMx0RRP5vVzMwFNjuf4N9/rpEqW5/IrX91Ki+FwTFdmWKIUgLp65EiZqqqJUb64uHqS+mQduFBQFIXu7e3lf/pzXGe32Iw1QZ+F9vlL1Xq1a7x8Z+V3M0JFNBQrVWk5a2tTuelQkaiih4dEPp+NWPfunhd0ulNUV1cXq/iXP60Mr3YwNntAe9Kz2j/sz3x9rUct52mrotEaD+8qM70eGbEWRictVpuVvdfQgY9+WUFDlR3vHN2Khvk+KCP9oHfvRLK2ERNJFULReBlz5coDqrym3HimxV3rmp+olX68j0Mvn0AiTeP2DyMYnUpghyMLg5CBvBoDWBaCIOLggWqc32tERX834ithBI+dwL0lGb9d6YNvOQ5BziuqSIRSeb3pjlm5qGnbrmqUzYyCmZ5B28lOtD5XB9AUTBzQGF1AIRQGtFqUv/0qXmx3oaK3G7JGC9Wp13DviYxfe+YRTGQhMRw40Jcot8fDCQumy6Gs+azNXoy3WopxODIFOwM4z74BeXs1hLSMzPkLyPT0gSm2wPnBOdA5GWu9gwRcjeR6GkGvH9JTB23FiFpLkZLyTsYzNQXGWQ1zhQNhjoOsYpHqOIaSuTFEHvTAvJaAPpFEmkhXqXkgm8PyZ10oZCXIUhYZIY00ea4SM2ALMjiGha3UgZwqD8oDcHVq++U6g+msbZMNlNEEiteC44mwtAgqtQ5azoF5umdJfxQFiihBkWXI+TxEUYSYFiARcFGSQNM0WFMRUizjZNwk5zQZWWJS6kkINBMBSzPIExUsz4MhTCiG9Igo3igCztmtUDnsUHiWWKBBxmrGUigKKhGHSUqDTybB5bNg4CHc4znoyZeGWBwFIlPJAQwxijOboDYZoTEXQQqEUCBpoQmY9cN3oWtvAzU+jcD125BZBkM1+3C3dwFaNofGXXrwHFH77RRhbbRhcOt2VG7n4eAV1Ls2w9WwBYXpedDRKHQH9mH1yxtIB1fAW0146Bfx5K4Xx+tLYX7pGOSrN9AeHUXaWIVr/Ul09y0Rdgo2ohhdyT4/65WafDkNHM/uQVtnC8x/PUbh0QBmtJswSFlgmxkHgsvQmg34XbUJH18fx6NBH7JlTjg7D6Io5IN7eRq1zZUIaYoIOHOJcbtrwREj2/a34uihOtTp81Dduoa10VlM7WjBpQU1SgNe7Cbm0STzFEXBqNfAaBAxPLaEgREvGuudOHf6BbjsDrQO9sG8ww0/ZwXj8bixubSMfaZmCwy+SSS7e5DMUujeth/fDKcxOeHD6Y4q8KSv5BgyMVTOZUHlMzBpJKwLgvTw5z+kxakx5RVPM3ew2q1xPJ6FKrFOMSV37igBrSHWLQHFJU54nbW4L2rx6Ptp0MRxHccglQxhaC2YSKSiQYTzCxNzQz4hnPAxghCkCpk1jVZM+kcHlc9H+3QL545vPmAx7rGYNOuEC6gzgIuvb+4IltftHAgpTl8gruVpRdZq1FGxUIjs2Wb0t6cX52Jzc96UThObN7CJh+Pj5PaEvBHPf03HL140N0tS4in4Rrlv3uQm379uQKBPA3UxY7boC1nyCwqyLG4piouLi4viP+/+1/VvabpBP/w26EQAAAAASUVORK5CYII=" alt="" />
                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">Country:</h2></div>
                    <div className="w-full h-auto"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">United State</h2></div>
                </div>
                <div className="w-fit max-w-[132px] h-auto flex justify-center items-center flex-col ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">sales:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">2500</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">value:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">$230,900</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.03em] font-semibold text-[.8em] m-[0]">Bounce:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">29.9%</h2></div>

                </div>
            </div>

            <div className="w-full h-auto pb-[10px] pt-[10px] border-b-1 border-[#96a0b1] flex mt-[10px]">
                <div className="w-full max-w-[70px] h-auto flex items-center ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAAAAXNSR0IArs4c6QAABRpJREFUOBGVVFtsFFUY/mZ2Lnvf7qXLtmxboLRLu7SF0tIWFKGQBqFqMG7UBCTxQsAHExONPPiATyQmEuHBpIk+oUAwoAYTQLFqpDb0fr/Quu3S3e12t91rZ3dmZ3fHQxNffNI/OefknJn58n3/982h8D+ra2CANY94DWMx0RRP5vVzMwFNjuf4N9/rpEqW5/IrX91Ki+FwTFdmWKIUgLp65EiZqqqJUb64uHqS+mQduFBQFIXu7e3lf/pzXGe32Iw1QZ+F9vlL1Xq1a7x8Z+V3M0JFNBQrVWk5a2tTuelQkaiih4dEPp+NWPfunhd0ulNUV1cXq/iXP60Mr3YwNntAe9Kz2j/sz3x9rUct52mrotEaD+8qM70eGbEWRictVpuVvdfQgY9+WUFDlR3vHN2Khvk+KCP9oHfvRLK2ERNJFULReBlz5coDqrym3HimxV3rmp+olX68j0Mvn0AiTeP2DyMYnUpghyMLg5CBvBoDWBaCIOLggWqc32tERX834ithBI+dwL0lGb9d6YNvOQ5BziuqSIRSeb3pjlm5qGnbrmqUzYyCmZ5B28lOtD5XB9AUTBzQGF1AIRQGtFqUv/0qXmx3oaK3G7JGC9Wp13DviYxfe+YRTGQhMRw40Jcot8fDCQumy6Gs+azNXoy3WopxODIFOwM4z74BeXs1hLSMzPkLyPT0gSm2wPnBOdA5GWu9gwRcjeR6GkGvH9JTB23FiFpLkZLyTsYzNQXGWQ1zhQNhjoOsYpHqOIaSuTFEHvTAvJaAPpFEmkhXqXkgm8PyZ10oZCXIUhYZIY00ea4SM2ALMjiGha3UgZwqD8oDcHVq++U6g+msbZMNlNEEiteC44mwtAgqtQ5azoF5umdJfxQFiihBkWXI+TxEUYSYFiARcFGSQNM0WFMRUizjZNwk5zQZWWJS6kkINBMBSzPIExUsz4MhTCiG9Igo3igCztmtUDnsUHiWWKBBxmrGUigKKhGHSUqDTybB5bNg4CHc4znoyZeGWBwFIlPJAQwxijOboDYZoTEXQQqEUCBpoQmY9cN3oWtvAzU+jcD125BZBkM1+3C3dwFaNofGXXrwHFH77RRhbbRhcOt2VG7n4eAV1Ls2w9WwBYXpedDRKHQH9mH1yxtIB1fAW0146Bfx5K4Xx+tLYX7pGOSrN9AeHUXaWIVr/Ul09y0Rdgo2ohhdyT4/65WafDkNHM/uQVtnC8x/PUbh0QBmtJswSFlgmxkHgsvQmg34XbUJH18fx6NBH7JlTjg7D6Io5IN7eRq1zZUIaYoIOHOJcbtrwREj2/a34uihOtTp81Dduoa10VlM7WjBpQU1SgNe7Cbm0STzFEXBqNfAaBAxPLaEgREvGuudOHf6BbjsDrQO9sG8ww0/ZwXj8bixubSMfaZmCwy+SSS7e5DMUujeth/fDKcxOeHD6Y4q8KSv5BgyMVTOZUHlMzBpJKwLgvTw5z+kxakx5RVPM3ew2q1xPJ6FKrFOMSV37igBrSHWLQHFJU54nbW4L2rx6Ptp0MRxHccglQxhaC2YSKSiQYTzCxNzQz4hnPAxghCkCpk1jVZM+kcHlc9H+3QL545vPmAx7rGYNOuEC6gzgIuvb+4IltftHAgpTl8gruVpRdZq1FGxUIjs2Wb0t6cX52Jzc96UThObN7CJh+Pj5PaEvBHPf03HL140N0tS4in4Rrlv3uQm379uQKBPA3UxY7boC1nyCwqyLG4piouLi4viP+/+1/VvabpBP/w26EQAAAAASUVORK5CYII=" alt="" />
                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">Country:</h2></div>
                    <div className="w-full h-auto"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">United State</h2></div>
                </div>
                <div className="w-fit max-w-[132px] h-auto flex justify-center items-center flex-col ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">sales:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">2500</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">value:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">$230,900</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.03em] font-semibold text-[.8em] m-[0]">Bounce:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">29.9%</h2></div>

                </div>
            </div>

            <div className="w-full h-auto pb-[10px] pt-[10px] border-b-1 border-[#96a0b1] flex mt-[10px]">
                <div className="w-full max-w-[70px] h-auto flex items-center ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAAAAXNSR0IArs4c6QAABRpJREFUOBGVVFtsFFUY/mZ2Lnvf7qXLtmxboLRLu7SF0tIWFKGQBqFqMG7UBCTxQsAHExONPPiATyQmEuHBpIk+oUAwoAYTQLFqpDb0fr/Quu3S3e12t91rZ3dmZ3fHQxNffNI/OefknJn58n3/982h8D+ra2CANY94DWMx0RRP5vVzMwFNjuf4N9/rpEqW5/IrX91Ki+FwTFdmWKIUgLp65EiZqqqJUb64uHqS+mQduFBQFIXu7e3lf/pzXGe32Iw1QZ+F9vlL1Xq1a7x8Z+V3M0JFNBQrVWk5a2tTuelQkaiih4dEPp+NWPfunhd0ulNUV1cXq/iXP60Mr3YwNntAe9Kz2j/sz3x9rUct52mrotEaD+8qM70eGbEWRictVpuVvdfQgY9+WUFDlR3vHN2Khvk+KCP9oHfvRLK2ERNJFULReBlz5coDqrym3HimxV3rmp+olX68j0Mvn0AiTeP2DyMYnUpghyMLg5CBvBoDWBaCIOLggWqc32tERX834ithBI+dwL0lGb9d6YNvOQ5BziuqSIRSeb3pjlm5qGnbrmqUzYyCmZ5B28lOtD5XB9AUTBzQGF1AIRQGtFqUv/0qXmx3oaK3G7JGC9Wp13DviYxfe+YRTGQhMRw40Jcot8fDCQumy6Gs+azNXoy3WopxODIFOwM4z74BeXs1hLSMzPkLyPT0gSm2wPnBOdA5GWu9gwRcjeR6GkGvH9JTB23FiFpLkZLyTsYzNQXGWQ1zhQNhjoOsYpHqOIaSuTFEHvTAvJaAPpFEmkhXqXkgm8PyZ10oZCXIUhYZIY00ea4SM2ALMjiGha3UgZwqD8oDcHVq++U6g+msbZMNlNEEiteC44mwtAgqtQ5azoF5umdJfxQFiihBkWXI+TxEUYSYFiARcFGSQNM0WFMRUizjZNwk5zQZWWJS6kkINBMBSzPIExUsz4MhTCiG9Igo3igCztmtUDnsUHiWWKBBxmrGUigKKhGHSUqDTybB5bNg4CHc4znoyZeGWBwFIlPJAQwxijOboDYZoTEXQQqEUCBpoQmY9cN3oWtvAzU+jcD125BZBkM1+3C3dwFaNofGXXrwHFH77RRhbbRhcOt2VG7n4eAV1Ls2w9WwBYXpedDRKHQH9mH1yxtIB1fAW0146Bfx5K4Xx+tLYX7pGOSrN9AeHUXaWIVr/Ul09y0Rdgo2ohhdyT4/65WafDkNHM/uQVtnC8x/PUbh0QBmtJswSFlgmxkHgsvQmg34XbUJH18fx6NBH7JlTjg7D6Io5IN7eRq1zZUIaYoIOHOJcbtrwREj2/a34uihOtTp81Dduoa10VlM7WjBpQU1SgNe7Cbm0STzFEXBqNfAaBAxPLaEgREvGuudOHf6BbjsDrQO9sG8ww0/ZwXj8bixubSMfaZmCwy+SSS7e5DMUujeth/fDKcxOeHD6Y4q8KSv5BgyMVTOZUHlMzBpJKwLgvTw5z+kxakx5RVPM3ew2q1xPJ6FKrFOMSV37igBrSHWLQHFJU54nbW4L2rx6Ptp0MRxHccglQxhaC2YSKSiQYTzCxNzQz4hnPAxghCkCpk1jVZM+kcHlc9H+3QL545vPmAx7rGYNOuEC6gzgIuvb+4IltftHAgpTl8gruVpRdZq1FGxUIjs2Wb0t6cX52Jzc96UThObN7CJh+Pj5PaEvBHPf03HL140N0tS4in4Rrlv3uQm379uQKBPA3UxY7boC1nyCwqyLG4piouLi4viP+/+1/VvabpBP/w26EQAAAAASUVORK5CYII=" alt="" />
                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">Country:</h2></div>
                    <div className="w-full h-auto"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">United State</h2></div>
                </div>
                <div className="w-fit max-w-[132px] h-auto flex justify-center items-center flex-col ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">sales:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">2500</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">value:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">$230,900</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.03em] font-semibold text-[.8em] m-[0]">Bounce:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">29.9%</h2></div>

                </div>
            </div>

            <div className="w-full h-auto pb-[10px] pt-[10px] border-b-1 border-[#96a0b1] flex mt-[10px]">
                <div className="w-full max-w-[70px] h-auto flex items-center ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAAAAXNSR0IArs4c6QAABRpJREFUOBGVVFtsFFUY/mZ2Lnvf7qXLtmxboLRLu7SF0tIWFKGQBqFqMG7UBCTxQsAHExONPPiATyQmEuHBpIk+oUAwoAYTQLFqpDb0fr/Quu3S3e12t91rZ3dmZ3fHQxNffNI/OefknJn58n3/982h8D+ra2CANY94DWMx0RRP5vVzMwFNjuf4N9/rpEqW5/IrX91Ki+FwTFdmWKIUgLp65EiZqqqJUb64uHqS+mQduFBQFIXu7e3lf/pzXGe32Iw1QZ+F9vlL1Xq1a7x8Z+V3M0JFNBQrVWk5a2tTuelQkaiih4dEPp+NWPfunhd0ulNUV1cXq/iXP60Mr3YwNntAe9Kz2j/sz3x9rUct52mrotEaD+8qM70eGbEWRictVpuVvdfQgY9+WUFDlR3vHN2Khvk+KCP9oHfvRLK2ERNJFULReBlz5coDqrym3HimxV3rmp+olX68j0Mvn0AiTeP2DyMYnUpghyMLg5CBvBoDWBaCIOLggWqc32tERX834ithBI+dwL0lGb9d6YNvOQ5BziuqSIRSeb3pjlm5qGnbrmqUzYyCmZ5B28lOtD5XB9AUTBzQGF1AIRQGtFqUv/0qXmx3oaK3G7JGC9Wp13DviYxfe+YRTGQhMRw40Jcot8fDCQumy6Gs+azNXoy3WopxODIFOwM4z74BeXs1hLSMzPkLyPT0gSm2wPnBOdA5GWu9gwRcjeR6GkGvH9JTB23FiFpLkZLyTsYzNQXGWQ1zhQNhjoOsYpHqOIaSuTFEHvTAvJaAPpFEmkhXqXkgm8PyZ10oZCXIUhYZIY00ea4SM2ALMjiGha3UgZwqD8oDcHVq++U6g+msbZMNlNEEiteC44mwtAgqtQ5azoF5umdJfxQFiihBkWXI+TxEUYSYFiARcFGSQNM0WFMRUizjZNwk5zQZWWJS6kkINBMBSzPIExUsz4MhTCiG9Igo3igCztmtUDnsUHiWWKBBxmrGUigKKhGHSUqDTybB5bNg4CHc4znoyZeGWBwFIlPJAQwxijOboDYZoTEXQQqEUCBpoQmY9cN3oWtvAzU+jcD125BZBkM1+3C3dwFaNofGXXrwHFH77RRhbbRhcOt2VG7n4eAV1Ls2w9WwBYXpedDRKHQH9mH1yxtIB1fAW0146Bfx5K4Xx+tLYX7pGOSrN9AeHUXaWIVr/Ul09y0Rdgo2ohhdyT4/65WafDkNHM/uQVtnC8x/PUbh0QBmtJswSFlgmxkHgsvQmg34XbUJH18fx6NBH7JlTjg7D6Io5IN7eRq1zZUIaYoIOHOJcbtrwREj2/a34uihOtTp81Dduoa10VlM7WjBpQU1SgNe7Cbm0STzFEXBqNfAaBAxPLaEgREvGuudOHf6BbjsDrQO9sG8ww0/ZwXj8bixubSMfaZmCwy+SSS7e5DMUujeth/fDKcxOeHD6Y4q8KSv5BgyMVTOZUHlMzBpJKwLgvTw5z+kxakx5RVPM3ew2q1xPJ6FKrFOMSV37igBrSHWLQHFJU54nbW4L2rx6Ptp0MRxHccglQxhaC2YSKSiQYTzCxNzQz4hnPAxghCkCpk1jVZM+kcHlc9H+3QL545vPmAx7rGYNOuEC6gzgIuvb+4IltftHAgpTl8gruVpRdZq1FGxUIjs2Wb0t6cX52Jzc96UThObN7CJh+Pj5PaEvBHPf03HL140N0tS4in4Rrlv3uQm379uQKBPA3UxY7boC1nyCwqyLG4piouLi4viP+/+1/VvabpBP/w26EQAAAAASUVORK5CYII=" alt="" />
                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">Country:</h2></div>
                    <div className="w-full h-auto"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">United State</h2></div>
                </div>
                <div className="w-fit max-w-[132px] h-auto flex justify-center items-center flex-col ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">sales:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">2500</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.025em] font-semibold text-[.8em] m-[0]">value:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">$230,900</h2></div>

                </div>
                <div className="w-full max-w-[132px] h-auto ">
                    <div className="w-full h-auto text-center"><h2 className="text-[#96a0b1] tracking-[0-0.03em] font-semibold text-[.8em] m-[0]">Bounce:</h2></div>
                    <div className="w-full h-auto text-center"><h2 className="text-[#343767] tracking-[0-0.025em] font-semibold text-[.9em] m-[0]">29.9%</h2></div>

                </div>
            </div>
        </div>
    )
}


export { CardPrimary, CardSecondary ,PackageCard};