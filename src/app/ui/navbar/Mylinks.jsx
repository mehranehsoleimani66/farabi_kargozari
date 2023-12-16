export const links = [
  {
    id: 0,
    name: "فرصت شغلی ",
    submenu: false
  },
  {
    id: 1,
    name: "  بورس کالا و انرژی ",
    submenu: false
  },
  {
    id: 2,
    name: "  شعبه ها ",
    submenu: false
  },
  {
    id: 3,
    name: "  اخبار و تازه ها ",
    submenu: false
  },
  {
    id: 4,
    name: " سرمایه گذاری",
    submenu: true,
    sublinks: [
      {
        id: "a",
        Head: "راهکارهای سرمایه گذاری   ",
        sublink: [
          { id: 0, name: "   خرید سهام ", link: "/" },
          { id: 1, name: " صندوق سهامی  ", link: "/" },
          { id: 2, name: " صندوق درآمد ثابت ", link: "/" },
          { id: 3, name: " صندوق سهامی سلام", link: "/" },
          { id: 4, name: " صندوق درآمد ثابت لبخند", link: "/" },
          { id: 5, name: "  سهام عدالت ", link: "/" }
        ]
      },
      {
        id: "b",
        Head: " شروع سرمایه گذاری",
        sublink: [
          { id: 0, name: "  کد بورس و سجام ", link: "/" },
          { id: 1, name: " خدمات متمایز فارابی ", link: "/" },
          { id: 2, name: "انتخاب سرمایه گذاری  ", link: "/" },
          { id: 3, name: "  مشاوره مالی  ", link: "/" }
        ]
      },
      {
        id: "c",
        Head: "ابزارهای سرمایه گذاری",
        sublink: [
          { id: 0, name: "  فارابیکسو نکست", link: "/" },
          { id: 1, name: "  فارابیکسو ", link: "/" },
          { id: 2, name: "  آموزین ", link: "/" },
          { id: 3, name: "  مدیریت دارایی ", link: "/" },
          { id: 4, name: "  باهم ", link: "/" },
          { id: 5, name: "  نکسو ", link: "/" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: " فارابی  ",
    submenu: true,
    sublinks: [
      {
        id: "a",
        Head: "  درباره ما  ",
        sublink: [
          { id: 0, name: "   معرفی فارابی", link: "/" },
          { id: 1, name: " شرکت های همکاری ", link: "/" },
          { id: 2, name: " شماره حساب های شرکت ", link: "/" },
          { id: 3, name: "سوالات متداول", link: "/" }
        ]
      },
      {
        id: "b",
        Head: " ارتباط",
        sublink: [
          { id: 0, name: "  شراکت با فارابی", link: "/" },
          { id: 1, name: "  تماس با ما  ", link: "/" }
        ]
      },
      {
        id: "c",
        Head: " خدمات",
        sublink: [
          { id: 0, name: "  شراکت با ما", link: "/" },
          { id: 1, name: "  مشاوره با ما  ", link: "/" }
        ]
      }
    ]
  }
];
