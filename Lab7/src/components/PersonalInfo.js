import React from "react";

function PersonalInfo({ clicks, handleColorChange }) {
    return(
        <>
            <p><b>Місце народження:</b> 19 листопада, 2004 року, смт. Люблинець, Ковельський район, Волинська область.</p>
            <p><b>Освіта:</b> ОНЗ «Люблинецький ліцей»; Національний технічний університет України "Київський політехнічний інститут ім. Ігоря Сікорського", м. Київ.</p>
            <h3>Хобі:</h3>
            <ul>
                <li>Спорт;</li>
                <li>Програмування;</li>
                <li>
                    <span 
                        onClick={() => handleColorChange(1)} 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            backgroundColor: clicks[1] ? 'yellow' : '#001f3f', 
                            color: clicks[1] ? '#6A1B9A' : '#f8f9fa' 
                        }}
                    >
                        Дизайн;
                    </span>
                </li>
                <li>
                    <span 
                        onClick={() => handleColorChange(0)} 
                        style={{ 
                            display: 'block', 
                            width: '100%', 
                            backgroundColor: clicks[0] ? 'yellow' : '#001f3f', 
                            color: clicks[0] ? '#6A1B9A' : '#f8f9fa' 
                        }}
                    >
                        Книги;
                    </span>
                </li>
            </ul>

            <h3>Улюблені фільми:</h3>
            <ol>
                <li>"Інферно", 2016;</li>
                <li>"1+1", 2010;</li>
                <li>"Втеча з Шоушенка", 1994;</li>
            </ol>

            <h3>Львів — моє улюблене місто.</h3>
            <p>
                <b>Львів</b> - це одне з найкрасивіших міст України, відомий своєю 
                архітектурною спадщиною та культурною багатогранністю. Місто засноване 
                у середньовіччі і має вражаючий історичний центр, включаючи величні церкви, 
                старовинні будівлі і вузькі вулички, які переносять вас у часи минулого.
            </p>
            <p>
                Львів також славиться своєю неперевершеною кавовою культурою, 
                численними кафе та ресторанами, де можна скуштувати традиційні 
                українські страви. Місто є домівкою для безлічі культурних подій, 
                фестивалів і музеїв, що робить його важливим культурним центром України.
            </p>
            <p>
                Не менш важливим є і природний аспект Львова, з його зеленими парками
                та площами, що створюють затишну атмосферу для мешканців і туристів.
            </p>
        </>
    )
}

export default PersonalInfo;