import React from 'react';


const Education = () => {
    return (
        <div className="bg-light-primary dark:bg-dark-primary">
            <div className="grid lg:grid-cols-2 grid-cols-1 px-10 py-10 lg:px-40 lg:py-20 gap-8">
                <div>
                    <span className="title text-xl text-blue-600">Education</span>
                    
                    <p className="text-gray-500 dark:text-gray-300 pt-2"><span className="font-semibold">Graphic Design</span> at the Institución Universitaria <a href="https://www.itsa.edu.co/" target="_blank"><span className="font-semibold">ITSA</span></a><br />
                    Barranquilla, Atlántico - Colombia<span className="font-semibold"> (2018)</span>
                    </p>

                    <p className="text-gray-500 dark:text-gray-300 pt-2"><span className="font-semibold">Software Development</span> at the Corporación Universitaria Empresarial de Salamanca <a href="https://www.cues.edu.co/" target="_blank"><span className="font-semibold">CUES</span></a><br />
                    Barranquilla, Atlántico - Colombia<span className="font-semibold"> (2013 - 2016)</span>
                    </p>
                </div>
                <div>
                    <span className="title text-xl text-blue-600">Languages</span>
                    <div className="grid grid-cols-2">
                        <div className="m-0">
                        <p className="text-gray-500 dark:text-gray-300 pt-2"><span className="font-semibold">Spanish</span><br />
                        Native</p>
                        </div>
                        <div className="w-20">
                            <p className="text-gray-500 dark:text-gray-300 pt-2"><span className="font-semibold">English</span><br />
                        B2</p>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-300 pt-2"><span className="font-semibold">Design Tools:&nbsp;</span> Adobe Illustrator - Adobe Photoshop - Krita<br />
                    <span className="font-semibold">Frontend Technologies:&nbsp;</span> HTML5 - CSS & Frameworks - Javascript - React<br />
                    <span className="font-semibold">Backend Languages:&nbsp;</span> PHP - C# - Node - SQL Databases<br /> 
                    </p>
                </div>
                    
            </div>
        </div>
    )
}

export default Education;