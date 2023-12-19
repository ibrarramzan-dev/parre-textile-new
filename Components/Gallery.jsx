"use client";

import style from "@/styles/gallery.module.scss";
import React from "react";
import Image from "next/image";
import { PT_Serif, Arapey } from "next/font/google";

const pt_serif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <div>
      <div className={style.galleryimg}>
        <h1 className={`${style.header} ${arapey.className}`}>Gallery</h1>
        <div className={style.box}>
          <span style={{ "--i": 1 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84y8CpnQtequbb0XrkBBgdG48MVwHC4O6_wEHRFiPu0v5yNqfyR5Psjz_jMxPhBYnO40x42keaK3olq5eHdVf3fkEs6465Cw3eAcGYFCFIdpUp7g649pbE2dQPRlDwgOWtV8Ae2JWn5uFAH1ZXNTR4BtLpaZOnMj3m10sT2UWdH-Li2JQZz8G42HBUZwaswSvV7RV5bIb2fweoDk1mHjG5E_Nn60PWWhHQ_zwikOL5ZXYXBVfcLYt1fz1dVHpa9K7w4gon7Wb03WncjDurz4rX9XD0LOjHDo_qhM0KJvnToj1oCupetyFKW0UqEYh7MRLeudWrfD1qNw5UJdmFyjnE3wF7TUr9Q40MBL4YPJG-Td2eCwAaEAmEdUauKvmDs39LLQ6krV52WPESzB9LxelM5nV9bz6zoNXEiqn5RgFk81yjQIre17X3Id5dZjoau7Bu_O6gdZywMZZCwKRLGmPTtWpXLWv4XUgoXl29HsxhU0PmI6xUE8MJ6dxLux-SHPVKn1Wn42egY0eJ-Odxm48BZtlMIDVl6U29NKPDcF7GwFzkHepOKlqB5o0wAKFQLCXDJ8WoW_F2J9lCnAQBhocjw6OZoPXKI76tawb6rwT1pMhvIBEhlrI-vSbWz2FywDpBbDjiXYtyOn8Cl1icYB-Dvep7aNcPSOAOHI7zWBqF7owc2FiUHasSdN7YgUFJfpYAjpxDMAbLYyy9aCJwfJ-M5lfDPm7iRcAX6OzALlgkNbtjoA7DjcYNtvHPaDOTrFjlYvUUyqvothh3NLGIkYPzTFIHi_vdsjryhZx-9Dxz5XrZgBRr1sjp8eMviMVxlka_TAwpniJLh4MnawYr3Xm8-eR5KfO9ooVbHHwcKpO3WuZlHIyCSsiAwwJW18eWKdg=w648-h408-s-no-gm?authuser=0"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84y8CpnQtequbb0XrkBBgdG48MVwHC4O6_wEHRFiPu0v5yNqfyR5Psjz_jMxPhBYnO40x42keaK3olq5eHdVf3fkEs6465Cw3eAcGYFCFIdpUp7g649pbE2dQPRlDwgOWtV8Ae2JWn5uFAH1ZXNTR4BtLpaZOnMj3m10sT2UWdH-Li2JQZz8G42HBUZwaswSvV7RV5bIb2fweoDk1mHjG5E_Nn60PWWhHQ_zwikOL5ZXYXBVfcLYt1fz1dVHpa9K7w4gon7Wb03WncjDurz4rX9XD0LOjHDo_qhM0KJvnToj1oCupetyFKW0UqEYh7MRLeudWrfD1qNw5UJdmFyjnE3wF7TUr9Q40MBL4YPJG-Td2eCwAaEAmEdUauKvmDs39LLQ6krV52WPESzB9LxelM5nV9bz6zoNXEiqn5RgFk81yjQIre17X3Id5dZjoau7Bu_O6gdZywMZZCwKRLGmPTtWpXLWv4XUgoXl29HsxhU0PmI6xUE8MJ6dxLux-SHPVKn1Wn42egY0eJ-Odxm48BZtlMIDVl6U29NKPDcF7GwFzkHepOKlqB5o0wAKFQLCXDJ8WoW_F2J9lCnAQBhocjw6OZoPXKI76tawb6rwT1pMhvIBEhlrI-vSbWz2FywDpBbDjiXYtyOn8Cl1icYB-Dvep7aNcPSOAOHI7zWBqF7owc2FiUHasSdN7YgUFJfpYAjpxDMAbLYyy9aCJwfJ-M5lfDPm7iRcAX6OzALlgkNbtjoA7DjcYNtvHPaDOTrFjlYvUUyqvothh3NLGIkYPzTFIHi_vdsjryhZx-9Dxz5XrZgBRr1sjp8eMviMVxlka_TAwpniJLh4MnawYr3Xm8-eR5KfO9ooVbHHwcKpO3WuZlHIyCSsiAwwJW18eWKdg=w648-h408-s-no-gm?authuser=0"
              width={100} // change image size in px.
              height={100} // change image size in px.
              alt=""
            />
          </span>
          <span style={{ "--i": 3 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84y8CpnQtequbb0XrkBBgdG48MVwHC4O6_wEHRFiPu0v5yNqfyR5Psjz_jMxPhBYnO40x42keaK3olq5eHdVf3fkEs6465Cw3eAcGYFCFIdpUp7g649pbE2dQPRlDwgOWtV8Ae2JWn5uFAH1ZXNTR4BtLpaZOnMj3m10sT2UWdH-Li2JQZz8G42HBUZwaswSvV7RV5bIb2fweoDk1mHjG5E_Nn60PWWhHQ_zwikOL5ZXYXBVfcLYt1fz1dVHpa9K7w4gon7Wb03WncjDurz4rX9XD0LOjHDo_qhM0KJvnToj1oCupetyFKW0UqEYh7MRLeudWrfD1qNw5UJdmFyjnE3wF7TUr9Q40MBL4YPJG-Td2eCwAaEAmEdUauKvmDs39LLQ6krV52WPESzB9LxelM5nV9bz6zoNXEiqn5RgFk81yjQIre17X3Id5dZjoau7Bu_O6gdZywMZZCwKRLGmPTtWpXLWv4XUgoXl29HsxhU0PmI6xUE8MJ6dxLux-SHPVKn1Wn42egY0eJ-Odxm48BZtlMIDVl6U29NKPDcF7GwFzkHepOKlqB5o0wAKFQLCXDJ8WoW_F2J9lCnAQBhocjw6OZoPXKI76tawb6rwT1pMhvIBEhlrI-vSbWz2FywDpBbDjiXYtyOn8Cl1icYB-Dvep7aNcPSOAOHI7zWBqF7owc2FiUHasSdN7YgUFJfpYAjpxDMAbLYyy9aCJwfJ-M5lfDPm7iRcAX6OzALlgkNbtjoA7DjcYNtvHPaDOTrFjlYvUUyqvothh3NLGIkYPzTFIHi_vdsjryhZx-9Dxz5XrZgBRr1sjp8eMviMVxlka_TAwpniJLh4MnawYr3Xm8-eR5KfO9ooVbHHwcKpO3WuZlHIyCSsiAwwJW18eWKdg=w648-h408-s-no-gm?authuser=0"
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span style={{ "--i": 4 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84y8CpnQtequbb0XrkBBgdG48MVwHC4O6_wEHRFiPu0v5yNqfyR5Psjz_jMxPhBYnO40x42keaK3olq5eHdVf3fkEs6465Cw3eAcGYFCFIdpUp7g649pbE2dQPRlDwgOWtV8Ae2JWn5uFAH1ZXNTR4BtLpaZOnMj3m10sT2UWdH-Li2JQZz8G42HBUZwaswSvV7RV5bIb2fweoDk1mHjG5E_Nn60PWWhHQ_zwikOL5ZXYXBVfcLYt1fz1dVHpa9K7w4gon7Wb03WncjDurz4rX9XD0LOjHDo_qhM0KJvnToj1oCupetyFKW0UqEYh7MRLeudWrfD1qNw5UJdmFyjnE3wF7TUr9Q40MBL4YPJG-Td2eCwAaEAmEdUauKvmDs39LLQ6krV52WPESzB9LxelM5nV9bz6zoNXEiqn5RgFk81yjQIre17X3Id5dZjoau7Bu_O6gdZywMZZCwKRLGmPTtWpXLWv4XUgoXl29HsxhU0PmI6xUE8MJ6dxLux-SHPVKn1Wn42egY0eJ-Odxm48BZtlMIDVl6U29NKPDcF7GwFzkHepOKlqB5o0wAKFQLCXDJ8WoW_F2J9lCnAQBhocjw6OZoPXKI76tawb6rwT1pMhvIBEhlrI-vSbWz2FywDpBbDjiXYtyOn8Cl1icYB-Dvep7aNcPSOAOHI7zWBqF7owc2FiUHasSdN7YgUFJfpYAjpxDMAbLYyy9aCJwfJ-M5lfDPm7iRcAX6OzALlgkNbtjoA7DjcYNtvHPaDOTrFjlYvUUyqvothh3NLGIkYPzTFIHi_vdsjryhZx-9Dxz5XrZgBRr1sjp8eMviMVxlka_TAwpniJLh4MnawYr3Xm8-eR5KfO9ooVbHHwcKpO3WuZlHIyCSsiAwwJW18eWKdg=w648-h408-s-no-gm?authuser=0"
              width={100}
              height={100}
              alt=""
            />
          </span>
          <span style={{ "--i": 5 }}>
            <Image
              src="https://lh3.googleusercontent.com/pw/ABLVV84y8CpnQtequbb0XrkBBgdG48MVwHC4O6_wEHRFiPu0v5yNqfyR5Psjz_jMxPhBYnO40x42keaK3olq5eHdVf3fkEs6465Cw3eAcGYFCFIdpUp7g649pbE2dQPRlDwgOWtV8Ae2JWn5uFAH1ZXNTR4BtLpaZOnMj3m10sT2UWdH-Li2JQZz8G42HBUZwaswSvV7RV5bIb2fweoDk1mHjG5E_Nn60PWWhHQ_zwikOL5ZXYXBVfcLYt1fz1dVHpa9K7w4gon7Wb03WncjDurz4rX9XD0LOjHDo_qhM0KJvnToj1oCupetyFKW0UqEYh7MRLeudWrfD1qNw5UJdmFyjnE3wF7TUr9Q40MBL4YPJG-Td2eCwAaEAmEdUauKvmDs39LLQ6krV52WPESzB9LxelM5nV9bz6zoNXEiqn5RgFk81yjQIre17X3Id5dZjoau7Bu_O6gdZywMZZCwKRLGmPTtWpXLWv4XUgoXl29HsxhU0PmI6xUE8MJ6dxLux-SHPVKn1Wn42egY0eJ-Odxm48BZtlMIDVl6U29NKPDcF7GwFzkHepOKlqB5o0wAKFQLCXDJ8WoW_F2J9lCnAQBhocjw6OZoPXKI76tawb6rwT1pMhvIBEhlrI-vSbWz2FywDpBbDjiXYtyOn8Cl1icYB-Dvep7aNcPSOAOHI7zWBqF7owc2FiUHasSdN7YgUFJfpYAjpxDMAbLYyy9aCJwfJ-M5lfDPm7iRcAX6OzALlgkNbtjoA7DjcYNtvHPaDOTrFjlYvUUyqvothh3NLGIkYPzTFIHi_vdsjryhZx-9Dxz5XrZgBRr1sjp8eMviMVxlka_TAwpniJLh4MnawYr3Xm8-eR5KfO9ooVbHHwcKpO3WuZlHIyCSsiAwwJW18eWKdg=w648-h408-s-no-gm?authuser=0"
              width={100}
              height={100}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};
