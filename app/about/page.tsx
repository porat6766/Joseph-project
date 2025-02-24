"use client";


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profilePhoto from "../../assets/c7a020be-f777-4b65-bfa0-bea31fe2f37c.png";
import whatsApp from "../../assets/whatsapp.png";

const AboutJoseph = () => {
    const [activeTab, setActiveTab] = useState('biography');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const experienceYears = new Date().getFullYear() - 2005;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 rtl text-right" dir="rtl">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-96 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/security-bg.jpg')",
                        transform: "translateZ(-10px) scale(2)",
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-5xl font-bold text-white mb-4">יוסף מזרחי</h1>
                        <p className="text-xl text-white">מומחה באבטחת מבנים ומוסדות</p>
                    </div>
                </div>
            </div>

            {/* Profile Content */}
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Profile Card */}
                    <div className={`w-full lg:w-1/3 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="relative h-80">
                            <Image
                                src={profilePhoto.src}
                                alt="יוסף מזרחי"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-3xl font-bold">יוסף מזרחי</h2>
                                <p className="text-lg">מנכ"ל ומייסד</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a href="tel:+972587262280" className="text-gray-700 font-medium">058-726-2280</a>                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:joseph@securityexpert.co.il" className="text-gray-700 font-medium">joseph@securityexpert.co.il</a>                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-medium">ירושלים והסביבה</span>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="https://wa.me/972587262280"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Image
                                        src={whatsApp.src}
                                        alt="WhatsApp"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6"
                                    />
                                    <span>צור קשר בוואטסאפ</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="w-full lg:w-2/3">
                        {/* Tabs Navigation */}
                        <div className={`mb-8 border-b border-gray-300 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex space-x-8 space-x-reverse">
                                <button
                                    onClick={() => setActiveTab('biography')}
                                    className={`pb-4 px-2 font-medium text-lg transition-colors relative ${activeTab === 'biography'
                                        ? 'text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    ביוגרפיה
                                    {activeTab === 'biography' && (
                                        <span className="absolute bottom-0 right-0 w-full h-1 bg-blue-600 rounded-t-md"></span>
                                    )}
                                </button>

                                <button
                                    onClick={() => setActiveTab('experience')}
                                    className={`pb-4 px-2 font-medium text-lg transition-colors relative ${activeTab === 'experience'
                                        ? 'text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    ניסיון מקצועי
                                    {activeTab === 'experience' && (
                                        <span className="absolute bottom-0 right-0 w-full h-1 bg-blue-600 rounded-t-md"></span>
                                    )}
                                </button>

                                <button
                                    onClick={() => setActiveTab('certificates')}
                                    className={`pb-4 px-2 font-medium text-lg transition-colors relative ${activeTab === 'certificates'
                                        ? 'text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    הסמכות
                                    {activeTab === 'certificates' && (
                                        <span className="absolute bottom-0 right-0 w-full h-1 bg-blue-600 rounded-t-md"></span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            {/* Biography */}
                            {activeTab === 'biography' && (
                                <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <h2 className="text-3xl font-bold text-gray-800">אודות יוסף מזרחי</h2>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        יוסף מזרחי הינו מומחה מוביל בתחום אבטחת מבנים ומוסדות, עם ניסיון של מעל {experienceYears} שנים בתכנון ויישום פתרונות אבטחה מתקדמים. כבוגר יחידה מובחרת בצה"ל, יוסף משלב ידע צבאי וטכנולוגי עם הבנה עמוקה של צרכי האבטחה במגזר העסקי והציבורי.
                                    </p>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        לאורך הקריירה שלו, יוסף הוביל עשרות פרויקטים של אבטחת מוסדות חינוך, בנייני משרדים, מוסדות ציבור ואירועים המוניים. הגישה הייחודית שלו משלבת פתרונות טכנולוגיים חדשניים עם אסטרטגיות אבטחה מסורתיות, תוך התאמה מדויקת לצרכי הלקוח.
                                    </p>

                                    <blockquote className="border-r-4 border-blue-500 pr-6 py-2 italic text-gray-600 my-8">
                                        "אבטחה איכותית היא שילוב של טכנולוגיה מתקדמת, תכנון מדויק והגורם האנושי המיומן. כל אחד מהם חיוני, אך יחד הם יוצרים מערכת הגנה בלתי חדירה."
                                    </blockquote>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        כיום, יוסף עומד בראש צוות מומחים המספק שירותי ייעוץ, תכנון והדרכה בתחום האבטחה לארגונים מובילים בישראל. חזונו הוא להפוך כל מבנה ומוסד למקום בטוח יותר, תוך שימוש בפתרונות חדשניים ויעילים.
                                    </p>
                                </div>
                            )}

                            {/* Experience */}
                            {activeTab === 'experience' && (
                                <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <h2 className="text-3xl font-bold text-gray-800">ניסיון מקצועי</h2>

                                    <div className="relative border-r-2 border-blue-500 pr-8">
                                        {/* Timeline items */}
                                        <div className="mb-10 relative">
                                            <div className="absolute right-[-1.65rem] top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-800">מנכ"ל ומייסד - פתרונות אבטחה מתקדמים</h3>
                                                <p className="text-blue-600 mb-4">2015 - היום</p>
                                                <p className="text-gray-700">
                                                    ניהול חברה מובילה בתחום פתרונות אבטחה למבנים ומוסדות. פיתוח מודלים חדשניים לאבטחה משולבת, ייעוץ לארגונים גדולים והובלת פרויקטים מורכבים בפריסה ארצית.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-10 relative">
                                            <div className="absolute right-[-1.65rem] top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-800">יועץ בכיר לאבטחת מוסדות חינוך - משרד החינוך</h3>
                                                <p className="text-blue-600 mb-4">2010 - 2015</p>
                                                <p className="text-gray-700">
                                                    פיתוח וייישום תוכניות אבטחה עבור מוסדות חינוך ברחבי הארץ. גיבוש נהלי אבטחה, הדרכת צוותים והטמעת מערכות טכנולוגיות מתקדמות.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-10 relative">
                                            <div className="absolute right-[-1.65rem] top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-800">מנהל אבטחה - חברת אבטחה מובילה</h3>
                                                <p className="text-blue-600 mb-4">2005 - 2010</p>
                                                <p className="text-gray-700">
                                                    ניהול מערך האבטחה של לקוחות עסקיים גדולים, פיקוח על צוותי אבטחה, ותכנון מערכות אבטחה פיזיות וטכנולוגיות.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <div className="absolute right-[-1.65rem] top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-800">שירות צבאי - יחידה מובחרת</h3>
                                                <p className="text-blue-600 mb-4">2000 - 2005</p>
                                                <p className="text-gray-700">
                                                    שירות ביחידה מובחרת עם התמחות באבטחת אישים ומתקנים אסטרטגיים. הכשרה והדרכה של לוחמים בתחומי אבטחה מתקדמים.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Certificates */}
                            {activeTab === 'certificates' && (
                                <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                                    <h2 className="text-3xl font-bold text-gray-800">הסמכות ותעודות</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-r-4 border-blue-500 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-blue-500 p-3 rounded-full text-white">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">מומחה אבטחה מוסמך</h3>
                                            </div>
                                            <p className="text-gray-700">הסמכה בינלאומית בתחום אבטחת מבנים ומוסדות מטעם ארגון ASIS העולמי</p>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-r-4 border-blue-500 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-blue-500 p-3 rounded-full text-white">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">תעודת מנהל אבטחה</h3>
                                            </div>
                                            <p className="text-gray-700">הסמכה רשמית מטעם משרד החינוך לניהול אבטחה במוסדות חינוך</p>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-r-4 border-blue-500 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-blue-500 p-3 rounded-full text-white">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">מומחה אבטחת סייבר</h3>
                                            </div>
                                            <p className="text-gray-700">הסמכה בתחום אבטחת סייבר עם התמחות במערכות אבטחה משולבות</p>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-r-4 border-blue-500 shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-blue-500 p-3 rounded-full text-white">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">מדריך בכיר</h3>
                                            </div>
                                            <p className="text-gray-700">תעודת מדריך מוסמך להכשרת צוותי אבטחה ומנהלי אבטחה</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-blue-600 py-16 mt-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">לקוחות מספרים</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">״יוסף מזרחי הוביל את פרוייקט אבטחת הקמפוס שלנו בצורה מקצועית ויסודית. התוצאות דיברו בעד עצמן - עלייה משמעותית ברמת האבטחה ותחושת הביטחון.״</p>
                            <p className="font-bold text-gray-900">מיכאל לוי - מנהל קמפוס אקדמי</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">״ההדרכות שיוסף העביר לצוותי החירום שלנו היו ברמה הגבוהה ביותר. הידע המקצועי שלו והיכולת להעביר אותו בצורה ברורה תרמו רבות למוכנות הצוות.״</p>
                            <p className="font-bold text-gray-900">רונית כהן - מנהלת משאבי אנוש, חברת היי-טק</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">״שכרנו את יוסף לתכנון מערכת האבטחה במתחם החדש שלנו. הוא הבין במדויק את הצרכים שלנו והציע פתרונות חכמים ויעילים מבחינה תקציבית.״</p>
                            <p className="font-bold text-gray-900">דוד ישראלי - מנהל תפעול, רשת קניונים</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/972587262280"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
            >
                <Image
                    src={whatsApp.src}
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                />
            </a>
        </div>
    );
};

export default AboutJoseph;