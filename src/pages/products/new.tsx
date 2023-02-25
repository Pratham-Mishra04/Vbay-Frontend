import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { addItem } from '@/controllers/productController';
import { useRouter } from 'next/router';

const NewProduct = () => {

    const router = useRouter()

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [leastAsked, setLeastAsked] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [age, setAge] = useState<string>('');
    const [mrp, setMrp] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const submitHandler = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('leastAsked', leastAsked);
        formData.append('category', category);
        formData.append('age', age);
        formData.append('mrp', mrp);
        selectedFiles.forEach((file) => {
            formData.append('images', file);
        });
    
        if(await addItem(formData)===1) router.push('/')
    };

    return (
        <>
            <div className="w-full h-screen p-4 bg-gray-100 flex justify-center items-center overflow-y-hidden">
                <main className="w-full md:w-5/6 xl:w-4/6 h-9/10 flex items-center bg-gray-100 rounded-lg font-mono">
                    <div className="w-full sm:w-1/2 md:w-1/3 p-10 grid grid-cols-1 space-y-4">
                        <span className="font-bold text-2xl">Add Product</span>
                        <div className="space-y-2">
                            <input
                                className="w-full rounded-md h-10  p-4"
                                type="text"
                                placeholder="title"
                                onChange={(el) => setTitle(el.target.value)}
                            />
                            <textarea
                                className="w-full rounded-md min-h-[8rem] p-4"
                                placeholder="description"
                                onChange={(el) =>
                                    setDescription(el.target.value)
                                }
                            />
                            <input
                                className="w-full rounded-md h-10  p-4"
                                type="text"
                                placeholder="Category"
                                onChange={(el) => setCategory(el.target.value)}
                            />
                            <input
                                className="w-full rounded-md h-10  p-4"
                                type="text"
                                placeholder="age"
                                onChange={(el) => setAge(el.target.value)}
                            />
                            <input
                                className="w-full rounded-md h-10  p-4"
                                type="text"
                                placeholder="Least Asked"
                                onChange={(el) =>
                                    setLeastAsked(el.target.value)
                                }
                            />
                            <input
                                className="w-full rounded-md h-10  p-4"
                                type="text"
                                placeholder="MRP"
                                onChange={(el) => setMrp(el.target.value)}
                            />
                            <label>
                                <input
                                    type="file"
                                    hidden
                                    multiple
                                    onChange={({ target }) => {
                                        if (target.files && target.files[0]) {
                                            const file = target.files[0];
                                            setSelectedImage(
                                                URL.createObjectURL(file)
                                            );

                                            setSelectedFiles([...target.files]);
                                        }
                                    }}
                                />
                                <div className="w-full aspect-video p-4 rounded flex items-center justify-around border-2 border-dashed cursor-pointer">
                                    {selectedImage ? (
                                        <>
                                            <Image
                                                width={1000}
                                                height={1000}
                                                className="w-40"
                                                src={selectedImage}
                                                alt=""
                                            />
                                            {selectedFiles.length > 1 ? (
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center">
                                                    +{selectedFiles.length - 1}
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </>
                                    ) : (
                                        <span>Select Image</span>
                                    )}
                                </div>
                            </label>
                            <button
                                onClick={submitHandler}
                                className="w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                    <div className="hidden sm:inline sm:w-1/2 md:w-2/3 p-10 md:p-20">
                        <svg
                            id="f795efda-d52b-464f-8ed0-c83c27181fc6"
                            data-title="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="754"
                            height="750.35999"
                            viewBox="0 0 754 750.35999"
                        >
                            <defs>
                                <linearGradient
                                    id="b13d5aa8-7d59-4aa5-8b0c-a1087af90b05"
                                    x1="632.9307"
                                    y1="457.00246"
                                    x2="719.74066"
                                    y2="457.00246"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stop-color="#fff" />
                                    <stop
                                        offset="1"
                                        stop-color="#fff"
                                        stop-opacity="0.3"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="b216fe78-eea0-4fe3-b1f5-9d415c27bb0d"
                                    x1="578.9307"
                                    y1="243.00246"
                                    x2="665.74066"
                                    y2="243.00246"
                                    xlinkHref="#b13d5aa8-7d59-4aa5-8b0c-a1087af90b05"
                                />
                            </defs>
                            <path
                                d="M977,451.82A376.64732,376.64732,0,0,1,655.41,824.77H553.3c-.16.13995-5.82.41-5.82.41-.94995-.13-1.91-.27-2.86-.41q-10.905-1.605-21.61-3.83a372.65332,372.65332,0,0,1-81.03-26.75c-.27-.12-.53-.25-.8-.37a371.02329,371.02329,0,0,1-41.87-22.81c-.34-.21-.67-.42-1-.63-.57-.36-1.13-.71-1.69-1.08-.18-.11-.36-.22-.54-.34A376.057,376.057,0,0,1,361.41,743.72c-.54-.43-1.07995-.88-1.62-1.32q-3.255-2.7-6.45-5.46c-.02-.01-.03-.03-.05-.04A380.6518,380.6518,0,0,1,322.32,706.82c-.03-.04-.07-.07-.1-.11a376.23856,376.23856,0,0,1-88.33-164.6c-.12-.44-.22-.87-.33-1.31A378.13889,378.13889,0,0,1,223,451.82c0-208.21,168.79-377,377-377S977,243.61,977,451.82Z"
                                transform="translate(-223 -74.82001)"
                                fill="#3f3d56"
                            />
                            <path
                                d="M634.85347,507.4362,667.824,468.83765l32.97058-38.59855L719.407,408.4496c1.02981-1.2056-.55938-3.08643-1.58915-1.88088l-32.97058,38.59855-32.97057,38.59855-18.61242,21.78951c-1.02981,1.2056.55938,3.08642,1.58915,1.88087Z"
                                transform="translate(-223 -74.82001)"
                                opacity="0.8"
                                fill="url(#b13d5aa8-7d59-4aa5-8b0c-a1087af90b05)"
                            />
                            <rect
                                x="386.81"
                                y="336.40997"
                                width="34.09998"
                                height="413.54004"
                                fill="#2f2e41"
                            />
                            <polygon
                                points="409.95 488.23 409.88 500.61 409.05 650.87 408.95 668.78 408.73 709.14 408.51 749.95 406.31 749.95 406.53 709.14 406.74 671.44 406.85 650.5 407.68 500.64 407.75 488.22 409.95 488.23"
                                fill="#8b5cf6"
                            />
                            <path
                                d="M650.03085,416.72983h-46.204c-.67058-7.23824.99769-14.528,5.2942-21.87563l1.30636-8.927h31.90275l1.50484,8.814C648.30517,400.69674,650.037,408.21681,650.03085,416.72983Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <path
                                d="M643.31814,387.02727H610.39625a2.20019,2.20019,0,0,1-2.13943-2.71366l5.54447-23.102a2.2002,2.2002,0,0,1,2.13944-1.68672h21.83293a2.2002,2.2002,0,0,1,2.13944,1.68672l5.54448,23.102A2.2002,2.2002,0,0,1,643.31814,387.02727Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <path
                                d="M626.86,347.97a11.56351,11.56351,0,0,0-11.55,11.56v11.55h23.1V359.53A11.56351,11.56351,0,0,0,626.86,347.97Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <polygon
                                points="391.051 622.109 312.765 723.714 323.592 726.213 384.388 647.927 391.051 647.927 391.051 622.109"
                                fill="#2f2e41"
                            />
                            <polygon
                                points="419.831 622.109 498.117 723.714 487.29 726.213 426.494 647.927 419.831 647.927 419.831 622.109"
                                fill="#2f2e41"
                            />
                            <path
                                d="M872.38,320.07v392.4a378.72351,378.72351,0,0,1-82.45,65.08V320.07Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <rect
                                x="634.38665"
                                y="295.22386"
                                width="54.13388"
                                height="54.13388"
                                fill="#2f2e41"
                            />
                            <rect
                                x="601.90632"
                                y="114.5"
                                width="12.49243"
                                height="141.58091"
                                fill="#2f2e41"
                            />
                            <g opacity="0.4">
                                <path
                                    d="M796.93,320.07h-7V777.55q3.52736-2.06131,7-4.20514Z"
                                    transform="translate(-223 -74.82001)"
                                    fill="#e6e6e6"
                                />
                                <rect
                                    x="601.90631"
                                    y="114.5"
                                    width="7"
                                    height="130.75"
                                    fill="#e6e6e6"
                                />
                            </g>
                            <rect
                                x="583.16767"
                                y="309.79837"
                                width="44.97276"
                                height="24.98487"
                                fill="#8b5cf6"
                            />
                            <circle
                                cx="146.93326"
                                cy="244.84668"
                                r="66.1926"
                                fill="#e6e6e6"
                            />
                            <circle
                                cx="140.42251"
                                cy="199.27145"
                                r="7.59587"
                                fill="#cbcbcb"
                            />
                            <circle
                                cx="153.44401"
                                cy="275.23017"
                                r="7.59587"
                                fill="#cbcbcb"
                            />
                            <circle
                                cx="182.74237"
                                cy="232.91031"
                                r="5.42562"
                                fill="#cbcbcb"
                            />
                            <circle
                                cx="120.89027"
                                cy="250.27231"
                                r="17.36199"
                                fill="#cbcbcb"
                            />
                            <circle
                                cx="252.0149"
                                cy="349.21276"
                                r="3.57649"
                                fill="#8b5cf6"
                            />
                            <polygon
                                points="283.012 401.093 281.227 402.866 279.454 401.081 278.264 402.263 280.037 404.048 278.252 405.821 279.434 407.011 281.219 405.238 282.992 407.023 284.182 405.841 282.409 404.056 284.194 402.283 283.012 401.093"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="297.318 297.375 295.533 299.148 293.76 297.363 292.57 298.545 294.343 300.33 292.558 302.103 293.74 303.293 295.525 301.52 297.298 303.305 298.488 302.123 296.715 300.338 298.5 298.565 297.318 297.375"
                                fill="#e6e6e6"
                            />
                            <path
                                d="M565.279,175.37584c-3.862,2.5732-7.81471-3.55124-3.87846-6.01018C565.26232,166.79262,569.215,172.91706,565.279,175.37584Z"
                                transform="translate(-223 -74.82001)"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="118.557 366.728 116.1 366.189 116.638 363.731 115 363.372 114.461 365.83 112.004 365.292 111.645 366.93 114.102 367.469 113.564 369.926 115.202 370.285 115.741 367.827 118.198 368.366 118.557 366.728"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="494.557 71.728 492.1 71.189 492.638 68.731 491 68.372 490.461 70.83 488.004 70.292 487.645 71.93 490.102 72.469 489.564 74.926 491.202 75.285 491.741 72.827 494.198 73.366 494.557 71.728"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="686.557 230.728 684.1 230.189 684.638 227.731 683 227.372 682.461 229.83 680.004 229.292 679.645 230.93 682.102 231.469 681.564 233.926 683.202 234.285 683.741 231.827 686.198 232.366 686.557 230.728"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="222.46 110.506 220.003 109.967 220.541 107.51 218.903 107.151 218.364 109.608 215.906 109.07 215.547 110.708 218.005 111.247 217.467 113.705 219.105 114.063 219.644 111.606 222.101 112.144 222.46 110.506"
                                fill="#e6e6e6"
                            />
                            <circle
                                cx="455.33966"
                                cy="188.55082"
                                r="3.57649"
                                fill="#8b5cf6"
                            />
                            <polygon
                                points="428.557 242.728 426.1 242.189 426.638 239.731 425 239.372 424.461 241.83 422.004 241.292 421.645 242.93 424.102 243.469 423.564 245.926 425.202 246.285 425.741 243.827 428.198 244.366 428.557 242.728"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="523.46 198.506 521.003 197.967 521.541 195.51 519.903 195.151 519.364 197.608 516.906 197.07 516.547 198.708 519.005 199.247 518.467 201.705 520.105 202.063 520.644 199.606 523.101 200.144 523.46 198.506"
                                fill="#e6e6e6"
                            />
                            <path
                                d="M580.85347,293.4362,613.824,254.83765l32.97058-38.59855L665.407,194.4496c1.02981-1.2056-.55938-3.08643-1.58915-1.88088l-32.97058,38.59855-32.97057,38.59855-18.61242,21.78951c-1.02981,1.2056.55938,3.08642,1.58915,1.88087Z"
                                transform="translate(-223 -74.82001)"
                                opacity="0.8"
                                fill="url(#b216fe78-eea0-4fe3-b1f5-9d415c27bb0d)"
                            />
                            <rect
                                x="385.49365"
                                y="646.9693"
                                width="6"
                                height="102.02313"
                                fill="#e6e6e6"
                            />
                            <path
                                d="M628.54,347.42a11.57294,11.57294,0,0,0-8.55,11.15v.1a2.21112,2.21112,0,0,0-1.51,1.58l-5.54,23.11a2.18494,2.18494,0,0,0,2.01,2.69l-.04.27-.15,1-2.26,7c-4.29,7.34-4.66,14.21-3.99,21.45h5.98V696.28l-78.04,101.3L542.19,798.9l-.91,1.18006-10.83-2.5,78.04-101.3V415.77l-4.99-.45c-.67-7.24.71-13.66,5-21l.26-7,.15-1,.04-.27a2.18494,2.18494,0,0,1-2.01-2.69l5.54-23.11a2.21112,2.21112,0,0,1,1.51-1.58v-.1a11.56351,11.56351,0,0,1,11.55-11.56A11.4326,11.4326,0,0,1,628.54,347.42Z"
                                transform="translate(-223 -74.82001)"
                                fill="#e6e6e6"
                            />
                            <polygon
                                points="431.177 646.969 425.594 646.969 425.594 647.506 485.974 725.255 491.062 724.081 431.177 646.969"
                                fill="#e6e6e6"
                            />
                            <path
                                d="M737.88,783.96v18.85a374.5016,374.5016,0,0,1-82.47,21.96h-123c-3.15-.57-6.29-1.18005-9.4-1.83V783.96Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <path
                                d="M632.05,725.69c-.7-.12-1.44-.24-2.2-.37-4.47-.72-9.86-1.54-16.04-2.39q-.63-.09-1.29-.18c-5.1-.69-10.71-1.39-16.76-2.08-33.17-3.73-79.5-6.72-126.78-2.61,1.17-4.7,2.25-9.4,3.27-14.08l-45.28,7.01L475.83,686.14a692.68108,692.68108,0,0,0,9.48-77.18l-24.46,3.78,25.01-12.72c1.79-32.03.95-53.35.95-53.35S405,589.2,339.58,654.2c-2.4-8.46-5.03-16.81-7.83-25.01l-35.14,29.4,28.97-46.52A689.19984,689.19984,0,0,0,293.8,541.1l-18.98,15.88,14.84-23.82c-15.02-28.35-26.76-46.17-26.76-46.17s-13.39,21.94-29.34,55.81a376.3031,376.3031,0,0,0,88.76,166.02,380.10848,380.10848,0,0,0,31.02,30.12q3.19491,2.76,6.45,5.46A377.473,377.473,0,0,0,396.08,770.96c.74.48,1.48.95,2.23,1.42a375.11665,375.11665,0,0,0,124.7,50.56c3.11.65,6.25,1.26,9.4,1.83.77.13995,1.54.28,2.31.41h12.76s5.66-.27,5.82-.41c15.85-13.87006,30.22-27.89,42.61-40.81,2.82-2.93,5.53-5.81006,8.14-8.61l-21.38-12.47,27.44,5.88c1.26-1.39,2.5-2.76,3.7-4.1,6.16-6.88,11.5-13.11,15.93-18.4.76-.92,1.5-1.8,2.21-2.66,8.07-9.74,12.51-15.68,12.51-15.68S640,727.01,632.05,725.69Z"
                                transform="translate(-223 -74.82001)"
                                fill="#2f2e41"
                            />
                            <path
                                d="M608.49,415.77h-5.98c-.67-7.24,1-14.53,5.29-21.87006l.96-6.57995.15-1h6l-.15,1L613.8,393.9c-4.29,7.34-5.96,14.63-5.29,21.87006h5.98"
                                transform="translate(-223 -74.82001)"
                                fill="#8b5cf6"
                            />
                            <rect
                                x="385.48999"
                                y="427.5"
                                width="6"
                                height="73"
                                fill="#8b5cf6"
                            />
                            <circle
                                cx="606.5"
                                cy="114.5"
                                r="11"
                                fill="#8b5cf6"
                            />
                        </svg>
                    </div>
                </main>
            </div>
        </>
    );
};

export default NewProduct;