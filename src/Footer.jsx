
function Footer() {
    const openHour=7
    const closeHour=18
    const hour = new Date().getHours()
    const isOpen = hour > openHour && hour < closeHour
    console.log(isOpen)
return (
    <footer>
            <div>
                {
                    isOpen ?
                
            <p>កំពុងបើកដំណើរការ</p> :
            <p>ហាងយើងខ្ញុំបើកដំណើរការនៅចន្លោះម៉ោង​​ {openHour}:00 ដល់ម៉ោង ​{closeHour}:00  </p>
                } 
            </div>
    </footer>
)
}
export default Footer