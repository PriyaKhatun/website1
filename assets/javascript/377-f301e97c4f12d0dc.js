"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [377],
  {
    1447: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return Z;
        },
      });
      var t = i(5893),
        o = i(7294),
        r = i(9501);
      let s = () => {
        let [n, e] = (0, o.useState)({ width: void 0, height: void 0 });
        return (
          (0, o.useEffect)(() => {
            {
              let n = () => {
                e({ width: window.innerWidth, height: window.innerHeight });
              };
              return (
                window.addEventListener("resize", n),
                n(),
                () => window.removeEventListener("resize", n)
              );
            }
          }, []),
          n
        );
      };
      var a = i(7297),
        l = i(9521);
      function d() {
        let n = (0, a.Z)([
          "\n  background-color: #342c77;\n  .anchor-cont {\n    display: inline-block;\n  }\n  .link-normal {\n    display: block;\n    font-size: 14px;\n    line-height: 32px;\n    font-weight: 400;\n    color: #d2dae0;\n    text-decoration: none;\n    transition: 0.2s all;\n  }\n  .link-normal:hover {\n    color: #fff;\n  }\n  .cont-width {\n    width: 100%;\n  }\n  .nl-input input {\n    font-size: 16px;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  /* .link-heading + div {\n    display: block;\n    padding: 0 1rem;\n  } */\n  .link-heading {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 24px;\n    color: ",
          ';\n    font-style: normal;\n    margin-bottom: 1rem;\n    display: block;\n    font-family: "Urbanist", sans-serif;\n  }\n  .cont-width {\n    width: 33.33%;\n  }\n  .newsLetter {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .nl-heading {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 29px;\n      color: ',
          ";\n    }\n    .nl-para {\n      color: ",
          ";\n      opacity: 0.7;\n    }\n    .nl-input {\n      width: 40%;\n      position: relative;\n    }\n    .subscribeBtn {\n      position: absolute;\n      right: 5px;\n      top: 5px;\n      bottom: 5px;\n      width: auto;\n    }\n    .subscribeBtn button {\n      background: #f35b04;\n    }\n  }\n  .ft-line {\n    opacity: 0.3;\n    background-color: #f7fafe;\n    height: 0.5px;\n    margin: 1rem 0px;\n  }\n  .ft-desc {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 18px;\n    color: #d2dae0;\n  }\n  .ti-link {\n    text-decoration: none;\n    color: #d2dae0;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 18px;\n  }\n  .ti-link:hover{\n    text-decoration:underline;\n  } .ft-social {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    .items {\n      display: block;\n      padding-left: 20px;\n    }\n  }\n\n  @keyframes footerAccord {\n    from {\n      max-height: 0;\n      overflow: hidden;\n\n      /* Set our transitions up. */\n      -webkit-transition: max-height 0.4s;\n      -moz-transition: max-height 0.4s;\n      transition: max-height 0.4s;\n    }\n    to {\n      max-height: 600px;\n    }\n  }\n\n  @-webkit-keyframes footerAccord {\n    from {\n      max-height: 0;\n      overflow: hidden;\n\n      /* Set our transitions up. */\n      -webkit-transition: max-height 0.4s;\n      -moz-transition: max-height 0.4s;\n      transition: max-height 0.4s;\n    }\n    to {\n      max-height: 600px;\n    }\n  }\n  .link-heading.inactive + div {\n    display: block;\n    animation-name: footAccordRev;\n    -webkit-animation-name: footAccordRev;\n\n    animation-duration: 0.5s;\n    -webkit-animation-duration: 0.5s;\n\n    animation-timing-function: ease-in-out;\n    -webkit-animation-timing-function: ease-in-out;\n\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    overflow: hidden;\n    height: 0;\n  }\n\n  @keyframes footAccordRev {\n    from {\n      max-height: 600px;\n      overflow: hidden;\n\n      /* Set our transitions up. */\n      -webkit-transition: max-height 0.4s;\n      -moz-transition: max-height 0.4s;\n      transition: max-height 0.4s;\n    }\n    to {\n      max-height: 0;\n    }\n  }\n\n  @-webkit-keyframes footAccordRev {\n    from {\n      max-height: 600px;\n      overflow: hidden;\n\n      /* Set our transitions up. */\n      -webkit-transition: max-height 0.4s;\n      -moz-transition: max-height 0.4s;\n      transition: max-height 0.4s;\n    }\n    to {\n      max-height: 0;\n    }\n  }\n  .subscribeBtn button {\n    padding: 0 auto;\n  }\n  @media (max-width: 768px) {\n    .subscribeBtn {\n      width: 112px !important;\n      right: 2px !important;\n    }\n    .subscribeBtn button {\n      padding: 0 24px;\n    }\n\n    .newsLetter .nl-heading {\n      font-size: 22px;\n    }\n    .newsLetter .nl-input {\n      width: 100%;\n    }\n    .nl-input input {\n      font-size: 14px;\n    }\n    .cont-width {\n      width: 100%;\n    }\n    .link-heading {\n      background-image: url(/images/icons/bottom-arrow.svg);\n      background-repeat: no-repeat;\n      background-position: calc(100% - 16px) 50%;\n      padding: 0.75rem 4px;\n      font-size: 18px;\n      margin-bottom: 0.5rem;\n    }\n    .link-heading + div {\n      display: none;\n      padding: 0 1rem;\n    }\n    .link-heading.active.mainAct + div {\n      display: block;\n    }\n    .link-heading.active:not(.mainAct) + div {\n      display: block;\n      animation-name: footerAccord;\n      -webkit-animation-name: footerAccord;\n      animation-duration: 0.5s;\n      -webkit-animation-duration: 0.5s;\n      animation-timing-function: ease-in-out;\n      -webkit-animation-timing-function: ease-in-out;\n      animation-fill-mode: forwards;\n      -webkit-animation-fill-mode: forwards;\n      margin-bottom: 1rem;\n    }\n    .ft-social {\n      justify-content: flex-start;\n      .items {\n        padding-left: 0;\n        padding-right: 20px;\n        margin-top: 1rem;\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    .cont-width {\n      width: 25%;\n    }\n  }\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      let c = l.ZP.div.withConfig({ componentId: "sc-11e109a9-0" })(
        d(),
        r.Z.colors.white,
        r.Z.colors.white,
        r.Z.colors.white
      );
      var p = i(9574),
        h = i(9692),
        m = i(2774),
        x = i(289),
        u = i(1591),
        f = i(9318),
        g = i(9244),
        b = i(9386),
        w = i(1649),
        v = i(1475),
        j = i(5169),
        k = i(4844),
        y = i(4681);
      function N() {
        let n = (0, a.Z)([
          '\n  font-family: "Urbanist";\n  margin:22px 10px 10px 12px;\n  .otp-heading {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 24px;\n    color: #323a43;\n    margin-bottom: 6px;\n  }\n  .otp-input-cont {\n    margin-top: 42px;\n    justify-content:center\n  }\n  .otp-input-cont .otpInput {\n    width: 54px;\n    height: 54px;\n    margin-right: 10px;\n    text-align: center;\n    outline: none;\n    font-size: 20px;\n    background: #ffffff;\n    border: 1px solid #cbd5e0;\n    border-radius: 8px;\n    padding-left: 10px;\n    color: #323a43;\n    font-weight: 500;\n  }\n  .otp-input-cont {\n    display: flex;\n  }\n  .otp-input-cont .otpInput:last-child {\n    margin-right: 0;\n  }\n  .resend-section {\n    margin-top: -12px;\n  }\n  .resend {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  .verify-btn button {\n    background-color: #3d348b;\n    margin-top: 42px;\n    margin-bottom: 22px;\n    width: 100%;\n  }\n  @media (min-width: 768px) {\n    .verify-btn button {\n      background-color: #3d348b;\n      margin-top: 42px;\n      margin-bottom: 22px;\n      width: 400px;\n    }\n    .otp-input-cont .otpInput {\n      width: 90px;\n      height: 90px;\n    }\n  }\n',
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      let _ = (n) => {
          let [e, i] = (0, o.useState)(""),
            s = (0, w.I0)(),
            a = () => {
              i("2"),
                n.setPopup(!1),
                n.setSearchText(""),
                s({ type: v.i4.POST_NEWSLETTER_RESET }),
                s({
                  type: v.i4.POST_NEWSLETTER_OTP_VERIFY_REQUEST,
                  newsletterotpdata: { otp: e },
                });
            };
          return (0, t.jsxs)(E, {
            children: [
              (0, t.jsx)("div", {
                className: "otp-heading",
                children: "Please check your e-mail",
              }),
              (0, t.jsxs)("div", {
                className: "d-md-flex d-block",
                children: [
                  (0, t.jsxs)(y.$X, {
                    className: "Body4R",
                    color: r.Z.colors.theme_secondary[100],
                    children: ["We’ve sent a code to ", n.emailId],
                  }),
                  " ",
                  (0, t.jsx)(y.$X, {
                    className: "mob-no ml-md-1 ml-0",
                    dfontWeight: 500,
                    mfontWeight: 500,
                    color: r.Z.colors.theme_secondary[200],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "otp-input-cont",
                children: (0, t.jsx)(k.Z, {
                  autoFocus: !0,
                  isNumberInput: !0,
                  length: 4,
                  className: "otpContainer mb-4",
                  inputClassName: "otpInput",
                  onChangeOTP: (n) => i(n),
                }),
              }),
              (0, t.jsx)("div", {
                className: "verify-btn",
                onClick: () => a(),
                children: (0, t.jsxs)(h.WC, {
                  size: "large",
                  fontWeight: "500",
                  fullWidth: "400px",
                  children: [
                    "Verify",
                    (0, t.jsx)(j.Z, {
                      width: 14,
                      height: 14,
                      className: "ml-3",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        E = l.ZP.div.withConfig({ componentId: "sc-b456562f-0" })(N());
      var T = i(3889),
        S = i(6412);
      let I = (n) => {
        var e;
        let [i, a] = (0, o.useState)(""),
          [l, d] = (0, o.useState)(""),
          [j, k] = (0, o.useState)(""),
          [y, N] = (0, o.useState)(!1),
          E = (0, o.useRef)(null),
          I = (0, o.useRef)(null),
          Z = (0, o.useRef)(null);
        (0, o.useRef)(null);
        let R = (0, o.useRef)(null),
          C = (0, w.I0)(),
          L = s(),
          P = (n) => {
            L.width < 576 &&
              (n.current.classList.contains("mainAct")
                ? (n.current.classList.remove("mainAct"),
                  n.current.classList.remove("active"),
                  n.current.classList.add("inactive"))
                : n.current.classList.contains("active")
                ? (n.current.classList.remove("active"),
                  n.current.classList.add("inactive"))
                : (n.current.classList.add("active"),
                  n.current.classList.remove("inactive")));
          },
          A = (0, w.v9)((n) => n.GDHomeApi.newsLetterApi),
          B = (0, w.v9)((n) => n.GDHomeApi.newsLetterOtpApi);
        (0, o.useEffect)(() => {
          var n, e, i, t, o, r, s;
          (null == A
            ? void 0
            : null === (n = A.newsLetterList) || void 0 === n
            ? void 0
            : n.status_code) == "200"
            ? N(!0)
            : (null == A
                ? void 0
                : null === (e = A.newsLetterList) || void 0 === e
                ? void 0
                : e.status_code) == "409" &&
              (null == A
                ? void 0
                : null === (i = A.newsLetterList) || void 0 === i
                ? void 0
                : i.Status) == "Otp already generated."
            ? N(!0)
            : (null == A
                ? void 0
                : null === (t = A.newsLetterList) || void 0 === t
                ? void 0
                : t.status_code) == "409" &&
              (null == A
                ? void 0
                : null === (o = A.newsLetterList) || void 0 === o
                ? void 0
                : o.Status) == "Already Subscribed!"
            ? d(
                null == A
                  ? void 0
                  : null === (s = A.newsLetterList) || void 0 === s
                  ? void 0
                  : s.Status
              )
            : (null == A
                ? void 0
                : null === (r = A.newsLetterList) || void 0 === r
                ? void 0
                : r.status_code) == "409" &&
              C({ type: v.i4.POST_NEWSLETTER_OTO_RESET });
        }, [A]),
          (0, o.useEffect)(() => {
            var n;
            (null == B
              ? void 0
              : null === (n = B.newsLetterotpList) || void 0 === n
              ? void 0
              : n.status) && C({ type: v.i4.POST_NEWSLETTER_RESET });
          }, [
            null == B
              ? void 0
              : null === (e = B.newsLetterotpList) || void 0 === e
              ? void 0
              : e.status,
          ]);
        let D = (n) => {
            if (/\S+@\S+\.\S+/.test(n)) {
              let e = { email: n.toLowerCase() };
              d(""),
                C({ type: v.i4.POST_NEWSLETTER_OTO_RESET }),
                C({ type: v.i4.POST_NEW_LETTER_REQUEST, newsletterdata: e });
            } else d("Please enter valid Email !");
          },
          W = () => {
            C({ type: v.i4.POST_NEWSLETTER_OTO_RESET }),
              C({ type: v.i4.POST_NEWSLETTER_RESET });
          };
        return (0, t.jsxs)(c, {
          children: [
            (0, t.jsxs)("div", {
              className: "ti-container bx-brd-box py-4",
              children: [
                (0, t.jsxs)("div", {
                  className: "newsLetter mb-3 mb-md-5",
                  children: [
                    (0, t.jsx)("span", {
                      className: "nl-heading urbanistFont",
                      children: "Subscribe to Our Newsletter",
                    }),
                    (0, t.jsx)("span", {
                      className: "text14 nl-para mb-3",
                      children:
                        "For Exclusive Updates, Latest Trends, and Exciting Business Opportunities!",
                    }),
                    (0, t.jsxs)("div", {
                      className: "nl-input",
                      children: [
                        (0, t.jsx)(p.o, {
                          type: "text",
                          value: i,
                          label: "Enter Your Email Address",
                          variant: "placeholder",
                          onChange: (n) => {
                            a(n.target.value), d("");
                          },
                          leftIcon: (0, t.jsx)(m.Z, {
                            width: "17px",
                            color: r.Z.colors.theme_info.text_color.dark_gray,
                            height: "17px",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "subscribeBtn",
                          onClick: () => D(i),
                          children: (0, t.jsx)(h.WC, {
                            size: "default",
                            children: "Subscribe",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("span", {
                      style: { color: "#f35b04" },
                      children: l,
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "row",
                  children: (0, t.jsxs)("div", {
                    className: "col-12 d-flex flex-wrap",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "cont-width",
                        children: [
                          (0, t.jsxs)("span", {
                            onClick: () => P(E),
                            ref: E,
                            className: "link-heading active mainAct",
                            children: ["Quick Links", " "],
                          }),
                          (0, t.jsxs)("div", {
                            className: "anchor-cont",
                            children: [
                              (0, t.jsx)(b.Z, {
                                href: (0, S.K)().DOMAIN_URI + "/about-us.html",
                                className: "link-normal",
                                children: "About us",
                              }),
                              (0, t.jsx)(b.Z, {
                                href:
                                  (0, S.K)().DOMAIN_URI + "/contact_us.html",
                                className: "link-normal",
                                children: "Contact us",
                              }),
                              (0, t.jsx)(b.Z, {
                                href:
                                  (0, S.K)().DOMAIN_URI +
                                  "/testimonial/testimonials.html",
                                className: "link-normal",
                                children: "Testimonials",
                              }),
                              (0, t.jsx)("a", {
                                href: "https://careers.tradeindia.com/",
                                className: "link-normal",
                                target: "_blank",
                                children: "Careers",
                              }),
                              (0, t.jsx)("a", {
                                href: "https://blog.getdistributors.com/",
                                className: "link-normal",
                                target: "_self",
                                children: "Blog",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "cont-width",
                        children: [
                          (0, t.jsx)("span", {
                            onClick: () => P(I),
                            ref: I,
                            className: "link-heading",
                            children: "Getdistributors",
                          }),
                          (0, t.jsxs)("div", {
                            className: "anchor-cont",
                            children: [
                              (0, t.jsx)("a", {
                                rel: "nofollow",
                                href: "https://pay.tradeindia.com",
                                className: "link-normal",
                                target: "_blank",
                                children: "Make A Payment",
                              }),
                              (0, t.jsx)("a", {
                                href: "https://tradekhata.tradeindia.com/",
                                className: "link-normal",
                                target: "_blank",
                                children: "TradeKhata",
                              }),
                              (0, t.jsx)("a", {
                                href: "https://www.tradeindia.com/ti-pay/",
                                className: "link-normal",
                                target: "_blank",
                                children: "TiPay",
                              }),
                              (0, t.jsx)(b.Z, {
                                href: "/request-callback.html",
                                className: "link-normal",
                                children: "Request a callback",
                              }),
                              (0, t.jsx)(b.Z, {
                                href: "/membership.html",
                                className: "link-normal",
                                children: "Membership",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "cont-width",
                        children: [
                          (0, t.jsx)("span", {
                            onClick: () => P(Z),
                            ref: Z,
                            className: "link-heading",
                            children: "Looking for",
                          }),
                          (0, t.jsxs)("div", {
                            className: "anchor-cont",
                            children: [
                              (0, t.jsx)(b.Z, {
                                href: "/distributors",
                                className: "link-normal",
                                children: "Distributor",
                              }),
                              (0, t.jsx)(b.Z, {
                                href: "/franchises",
                                className: "link-normal",
                                children: "Franchisor",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "cont-width",
                        children: [
                          (0, t.jsx)("span", {
                            onClick: () => P(R),
                            ref: R,
                            className: "link-heading",
                            children: "Help",
                          }),
                          (0, t.jsxs)("div", {
                            className: "anchor-cont",
                            children: [
                              (0, t.jsxs)(b.Z, {
                                href: (0, S.K)().DOMAIN_URI + "/feedback.html",
                                className: "link-normal",
                                children: [" ", "Feedback"],
                              }),
                              (0, t.jsx)(b.Z, {
                                href: (0, S.K)().DOMAIN_URI + "/sitemap.html",
                                className: "link-normal",
                                children: "Site map Report",
                              }),
                              (0, t.jsx)(b.Z, {
                                href:
                                  (0, S.K)().DOMAIN_URI +
                                  "/terms-conditions.html",
                                className: "link-normal",
                                children: "Terms",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", { className: "ft-line" }),
                (0, t.jsxs)("div", {
                  className: "row d-flex align-items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-12 col-md-6 col-lg-6",
                      children: (0, t.jsxs)("div", {
                        className: "ft-desc",
                        children: [
                          "GetDistributors.com - An ideal platform for anybody who is looking forward to Appointing or Becoming a Distributor, Franchisee and Sales Agent. GetDistributors.com is an initiative by",
                          (0, t.jsxs)("a", {
                            href: "https://www.tradeindia.com/",
                            className: "ti-link",
                            target: "_blank",
                            children: [" ", "tradeindia.com", " "],
                          }),
                          " ",
                          "\xa9 2023 Infocom Network Private Limited. All rights reserved.",
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "col-12 col-md-6 col-lg-6",
                      children: (0, t.jsxs)("div", {
                        className: "ft-social",
                        children: [
                          (0, t.jsx)("a", {
                            rel: "nofollow",
                            href: "https://www.instagram.com/getdistributors/",
                            className: "items",
                            target: "_blank",
                            children: (0, t.jsx)(x.Z, {
                              color: r.Z.colors.white,
                              height: 18,
                              width: 18,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            rel: "nofollow",
                            href: "https://www.facebook.com/getdistributors",
                            className: "items",
                            target: "_blank",
                            children: (0, t.jsx)(u.Z, {
                              color: r.Z.colors.white,
                              height: 18,
                              width: 18,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            rel: "nofollow",
                            href: "https://www.linkedin.com/company/getdistributors",
                            className: "items",
                            target: "_blank",
                            children: (0, t.jsx)(f.Z, {
                              color: r.Z.colors.white,
                              height: 18,
                              width: 18,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            rel: "nofollow",
                            href: "https://www.youtube.com/@getdistributors6941",
                            className: "items",
                            target: "_blank",
                            children: (0, t.jsx)(g.Z, {
                              color: r.Z.colors.white,
                              height: 18,
                              width: 18,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(T.Z, {
              dType: "Popup",
              mType: "Popup",
              setPopup: N,
              popup: y,
              resetOtp: W,
              setSearchText: a,
              bgClose: !0,
              children: (0, t.jsx)(_, {
                emailId: i,
                setPopup: N,
                setSearchText: a,
              }),
            }),
          ],
        });
      };
      var Z = I;
    },
    4474: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return A;
        },
      });
      var t = i(5893),
        o = i(5675),
        r = i.n(o),
        s = i(7434),
        a = i(3206),
        l = i(3752),
        d = i(8268),
        c = i(4868),
        p = i(9501),
        h = i(9692),
        m = i(9574),
        x = i(7297),
        u = i(9521);
      function f() {
        let n = (0, x.Z)([
          "\n  /* background: linear-gradient(\n    133.48deg,\n    #fdf3ea 2.02%,\n    rgba(255, 255, 255, 0) 79.57%\n  ); */\n  border-bottom: ",
          ";\n  .Header {\n    display: flex;\n  }\n  .Header img {\n    max-width: 100%;\n    height: fit-content;\n  }\n  .no-dec {\n    color: #000;\n    cursor: pointer;\n  }\n  .c-pointer {\n    cursor: pointer;\n  }\n  .login-pop-cont {\n    position: relative;\n  }\n  .user-logo-margin {\n    margin-left: -6px;\n  }\n  .login-popup {\n    position: absolute;\n    right: 0px;\n    top: 26px;\n    width: 250px;\n    padding: 20px;\n    background-color: #fff;\n    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    z-index: 10;\n  }\n  .border-line {\n    border: 1px solid #e2e8f0;\n    width: calc(100% + 40px);\n    margin-left: -20px;\n  }\n  .searchBar {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    /* position: relative; */\n  }\n  .searchBar .form {\n    width: 362px;\n    border-radius: 0;\n    display: flex;\n  }\n  .searchBar .form div {\n    border-radius: 0;\n  }\n  .searchBar input {\n    font-size: 16px;\n    padding-left: 56px;\n  }\n  .searchBtn {\n    .searchBtnCustom {\n      border-radius: 2px 36px 36px 2px;\n      height: 56px;\n      background: #3d348b;\n      width: 114px;\n    }\n  }\n\n  .title-btn button {\n    height: 56px;\n    width: 178px;\n    background: #cbd5e0;\n    border-radius: 30px 2px 2px 30px;\n    color: #323a43;\n    padding: 16px;\n  }\n  .down-arrow {\n    margin: 2px 0 0 12px;\n  }\n\n  .link-normal {\n    display: block;\n    font-size: 14px;\n    line-height: 32px;\n    font-weight: 400;\n    color: #000;\n    text-decoration: none;\n    transition: 0.2s all;\n  }\n  .link-normal:hover {\n    text-decoration: underline;\n  }\n  .loginBar {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    .items {\n      display: flex;\n      color: #000;\n      text-decoration: none;\n      margin-left: 20px;\n      font-size: 14px;\n    }\n    .joinFree {\n      background-color: #f35b04;\n      color: #fff;\n      border-radius: 36px;\n      padding: 20px 30px;\n    }\n  }\n  .title-btn {\n    position: relative;\n  }\n  .visit-ti-link {\n    text-decoration: none;\n    color: rgb(45, 56, 64);\n    margin-left: 70px;\n    /* font-size:14px; */\n  }\n  .visit-ti-link:hover {\n    text-decoration: underline;\n  }\n  .visit-ti-link.loggedIn {\n    margin-left: 70px;\n  }\n  @media (max-width: 768px) {\n    .visit-ti-link {\n      text-decoration: none;\n      color: rgb(45, 56, 64);\n      margin-left: 0px;\n      margin-right: 16px;\n      margin-top: -18px;\n      font-size: 14px;\n      /* font-weight:500; */\n    }\n    .loggedin-link-div {\n      position: relative;\n    }\n    .loginlogo {\n      margin-top: -12px;\n    }\n    .loggedInmob {\n      position: absolute;\n      top: 18px;\n      right: 16px;\n    }\n    .searchBar input {\n      font-size: 14px;\n      padding-left: 36px;\n    }\n    .inpIconlft {\n      right: auto;\n      left: 10px;\n    }\n    .searchBar input::placeholder {\n      font-size: 12px;\n    }\n    .logo {\n      display: block;\n      margin-bottom: 1rem;\n    }\n    .logo img {\n      max-width: 100%;\n      height: auto;\n    }\n    .ord2 {\n      order: 3;\n    }\n    .ord3 {\n      order: 2;\n    }\n    .loginBar .items {\n      margin-left: 10px;\n    }\n    .loginBar .joinFree {\n      padding: 10px 16px;\n    }\n    .loginBar {\n      margin-bottom: 1rem;\n    }\n    .searchBar {\n      height: 44px;\n      justify-content: flex-end;\n      width: 100%;\n    }\n    .searchBar .lefticon {\n      height: 44px;\n    }\n    .searchBar input {\n      height: 44px;\n    }\n    .title-btn {\n      position: relative;\n      width: 110px;\n    }\n    .searchBar .form {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n    }\n    .searchBar .lefticon {\n      height: 44px;\n      width: 100%;\n    }\n    .searchBar div:nth-child(2) {\n      border-radius: 0;\n    }\n    .searchBtn .searchBtnCustom {\n      height: 44px;\n      width: 48px;\n      padding: 0;\n    }\n    .searchBtn svg {\n      width: 16px;\n      height: 16px;\n    }\n    .title-btn button {\n      height: 44px;\n      width: 110px;\n      padding: 0 0 0 12px;\n      font-size: 12px;\n    }\n    .search-icon {\n      color: #fff;\n    }\n    .down-arrow {\n      margin: 2px 0 0 6px;\n      width: 20px;\n      height: 16px;\n    }\n    .grid-img {\n      margin-top: -18px;\n      float: right;\n    }\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      let g = u.ZP.div.withConfig({ componentId: "sc-7fbf65df-0" })(f(), (n) =>
        n.homeHeader ? "" : "1px solid #E1DFDF"
      );
      var b = i(9386),
        w = i(1163),
        v = i(4681),
        j = i(7294),
        k = i(6412);
      function y() {
        let n = (0, x.Z)([
          '\n  margin: 16px;\n  font-family: "Urbanist";\n  .user-logo-margin {\n    margin-left: -6px;\n  }\n  .nav-link {\n    text-decoration: none;\n    font-family: "Ubuntu";\n  }\n  .fd--link {\n    text-decoration: none;\n  }\n  .no-dec {\n    text-decoration: none;\n    color: #000;\n  }\n  .join-free-anchor {\n    background: #f35b04;\n    border-radius: 36px;\n    color: #fff;\n    padding: 10px 12px;\n    margin-left: 20px;\n    width: 94px;\n    display: inline-block;\n  }\n  .square-box {\n    border: 1px solid #cbd5e0;\n    border-radius: 12px;\n    padding: 12px 26px;\n    text-align: center;\n  }\n  .fd--section {\n    margin-top: 12px;\n    margin-bottom: 16px;\n  }\n  .border-line {\n    border: 1px solid #e2e8f0;\n  }\n  .byr--btn {\n    background: #3d348b;\n    border-radius: 36px;\n    width: 272px;\n    height: 48px;\n    color: #fff;\n  }\n  .btm-line {\n    width: calc(100% + 40px);\n    margin-left: -20px;\n  }\n  @media (min-width: 768px) {\n    display: none;\n  }\n  .loginBar1{\n    margin-bottom: 20px;\n  }\n  .items1{\n    background-color: #f35b04;\n    color: #fff;\n    border-radius: 36px;\n    padding: 16;\n    padding: 10px 16px;\n    text-decoration: none;\n    margin-left: 20px;\n    font-size: 14px;\n  }\n  .items2{\n    color: black;\n    border-radius: 36px;\n    padding: 16;\n    padding: 10px 16px;\n    text-decoration: none;\n    margin-left: 20px;\n    font-size: 14px;\n  }\n',
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      let N = (n) => {
          var e, i, o, s, a, d;
          let m = () => {
            n.setPopup(!1);
          };
          return (0, t.jsxs)(_, {
            children: [
              (
                null === (e = n.userDetail_res) || void 0 === e
                  ? void 0
                  : e.fname
              )
                ? (0, t.jsxs)(b.Z, {
                    href: "/",
                    className: "mt-4 mb-3 d-flex align-items-center  no-dec",
                    children: [
                      " ",
                      (0, t.jsx)(l.Z, {
                        width: 20,
                        height: 20,
                        className: "mr-2",
                      }),
                      (0, t.jsxs)("a", {
                        href: (0, k.K)().DOMAIN_URI + "/my-account/",
                        className: "link-normal",
                        children: [
                          " ",
                          (0, t.jsx)(v.o0, {
                            className: "ml-1",
                            children: "Hi ".concat(
                              null === (i = n.userDetail_res) || void 0 === i
                                ? void 0
                                : i.fname
                            ),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, t.jsxs)("div", {
                    className: "loginBar1",
                    children: [
                      (0, t.jsx)(b.Z, {
                        className: "items2 ",
                        href: "/signIn",
                        children: "Sign In",
                      }),
                      (0, t.jsx)(b.Z, {
                        className: "items1 ",
                        href: "/joinFree",
                        children: "Join Free",
                      }),
                    ],
                  }),
              (0, t.jsx)(v.GV, {
                mfontWeight: 600,
                dfontWeight: 600,
                color: p.Z.colors.theme_secondary[200],
                children: "What are you looking for?",
              }),
              (0, t.jsx)(v.o0, {
                color: p.Z.colors.theme_secondary[100],
                children: "Fast Track Your Business",
              }),
              (0, t.jsxs)("div", {
                className: "fd--section d-flex justify-content-between",
                children: [
                  (0, t.jsxs)(b.Z, {
                    href: "/distributors ",
                    className: "square-box fd--link",
                    children: [
                      (0, t.jsx)(r(), {
                        src: "/images/icons/distributer.svg",
                        alt: "Distributer",
                        width: 40,
                        height: 40,
                      }),
                      (0, t.jsx)(v.GV, {
                        color: p.Z.colors.theme_secondary[200],
                        children: "Distributor",
                      }),
                    ],
                  }),
                  (0, t.jsxs)(b.Z, {
                    href: "/franchises",
                    className: "square-box fd--link",
                    children: [
                      (0, t.jsx)(r(), {
                        src: "/images/icons/franchises.svg",
                        alt: "Franchises",
                        width: 40,
                        height: 40,
                      }),
                      (0, t.jsx)(v.GV, {
                        color: p.Z.colors.theme_secondary[200],
                        children: "Franchise",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", { className: "border-line" }),
              (0, t.jsxs)("div", {
                className: "d-flex mt-3 mb-3",
                children: [
                  (0, t.jsx)(v.o0, {
                    mfontWeight: 600,
                    dfontWeight: 600,
                    color: p.Z.colors.theme_secondary[100],
                    children: "You Want Fast Track",
                  }),
                  (0, t.jsx)(v.o0, {
                    mfontWeight: 600,
                    dfontWeight: 600,
                    color: p.Z.colors.theme_secondary[200],
                    className: "ml-1",
                    children: "Your Business Growth?",
                  }),
                ],
              }),
              (0, t.jsx)(h.WC, {
                className: "byr--btn",
                onClick: () => {
                  n.pyrOnclick(), m();
                },
                children: (0, t.jsx)(v.$X, {
                  mfontWeight: 500,
                  dfontWeight: 500,
                  children: "Post Your Requirement",
                }),
              }),
              (0, t.jsxs)("div", {
                onClick: () => {
                  n.logoutinfo(), n.setIsLoggedIn(!1), n.setPopup(!1);
                },
                children: [
                  (null === (o = n.userDetail_res) || void 0 === o
                    ? void 0
                    : o.fname) &&
                    (0, t.jsx)("div", {
                      className: "border-line btm-line mt-4 mb-3",
                    }),
                  (null === (s = n.userDetail_res) || void 0 === s
                    ? void 0
                    : s.fname) &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("a", {
                          href:
                            (0, k.K)().DOMAIN_URI +
                            "/my-account/my-distributors.html ",
                          className: "link-normal ",
                          children: [
                            (0, t.jsx)(v.GV, {
                              className: "d-flex align-items-center mb-1",
                              children: "My Distributors",
                            }),
                            " ",
                          ],
                        }),
                        (0, t.jsx)("a", {
                          href:
                            (0, k.K)().DOMAIN_URI +
                            "/my-account/my-franchises.html ",
                          className: "link-normal",
                          children: (0, t.jsx)(v.GV, {
                            className: "d-flex align-items-center mb-1",
                            children: "My Franchises",
                          }),
                        }),
                        (0, t.jsx)("a", {
                          href: "https://www.tradeindia.com/my-tradeindia/inquiries/inquiries-inbox.html?inquiry_source=GD_INQ  ",
                          className: "link-normal",
                          children: (0, t.jsx)(v.GV, {
                            className: "d-flex align-items-center mb-1",
                            children: "My Inquiries",
                          }),
                        }),
                      ],
                    }),
                  (null === (a = n.userDetail_res) || void 0 === a
                    ? void 0
                    : a.fname) &&
                    (0, t.jsx)("div", {
                      className: "border-line btm-line mt-4 mb-3",
                    }),
                  (null === (d = n.userDetail_res) || void 0 === d
                    ? void 0
                    : d.fname) &&
                    (0, t.jsxs)(v.GV, {
                      className: "d-flex align-items-center",
                      children: [
                        (0, t.jsx)(c.Z, {
                          className: "mr-2",
                          width: 16,
                          height: 16,
                        }),
                        " Logout",
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        _ = u.ZP.div.withConfig({ componentId: "sc-56e29c5d-0" })(y());
      function E() {
        let n = (0, x.Z)([
          '\n  font-family: "Urbanist";\n  background: #fff;\n  position: absolute;\n  left: 4px;\n  z-index: 10;\n  border-radius: 18px 22px 22px 17px;\n  width: 110px;\n  list-style-type: none;\n  padding: 4px 10px;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n\n  li {\n    cursor: pointer;\n    padding: 4px 0px;\n    transition: all 0.1s;\n  }\n  li:hover {\n    background: #ebebeb;\n  }\n  @media (min-width: 768px) {\n    left: 4px;\n    width: 178px;\n    padding: 10px;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n\n    li {\n      padding: 4px 10px;\n    }\n  }\n',
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      let T = (n) =>
          (0, t.jsx)(S, {
            className: "drop-down-cont",
            children: ["Distributors", "Franchise"].map((e, i) =>
              (0, t.jsx)(
                "li",
                {
                  children: (0, t.jsx)(
                    v.o0,
                    {
                      className: "dd-text Body3R",
                      mfontWeight: 500,
                      dfontWeight: 500,
                      onClick: () => n.setSelected(e),
                      children: e,
                    },
                    i
                  ),
                },
                i
              )
            ),
          }),
        S = u.ZP.ul.withConfig({ componentId: "sc-88b8bc6b-0" })(E());
      var I = i(1649),
        Z = i(1475),
        R = i(3889),
        C = i(1955),
        L = i(3902);
      let P = (n) => {
        var e;
        let { asPath: i, pathname: o } = (0, w.useRouter)(),
          [x, u] = (0, j.useState)(""),
          [f, y] = (0, j.useState)(!1),
          [_, E] = (0, j.useState)(!1),
          [S, P] = (0, j.useState)("Distributors"),
          [A, B] = (0, j.useState)(!1),
          D = (0, w.useRouter)(),
          W = (0, I.I0)(),
          { userDetail_res: O } = (0, I.v9)((n) => n.GDHomeApi.userDetailsApi),
          z = null == O ? void 0 : O.fname,
          M = C.Z.get("loggedStatus"),
          F = (e) => {
            if (
              (W({ type: "@RESET_CITY_NAME" }),
              W({ type: "@RESET_MODE" }),
              W({ type: "@RESET_CATEGORY_ID" }),
              W({ type: "@RESET_CATEGORY_NAME" }),
              W({ type: L.I.RESET_LOAD_MORE }),
              n.setSearchMode && n.setSearchMode("L"),
              "" != x)
            ) {
              let n = "/search_action.html?keyword=";
              (n =
                "Distributors" == S
                  ? (0, k.K)().DOMAIN_URI + "/distributors" + n + x
                  : (0, k.K)().DOMAIN_URI + "/franchisees" + n + x),
                e.preventDefault(),
                D.push(n),
                u("");
            }
          };
        (0, j.useEffect)(() => {
          !M ||
            (null == O ? void 0 : O.fname) ||
            W({ type: Z.i4.GET_USER_DETAILS_REQUEST });
        }, [W, null == O ? void 0 : O.fname, M]);
        let U = () => {
          W({ type: Z.i4.RESET_USER_DETAIL }),
            W({ type: Z.Ap.GET_LOGOUT_REQUEST });
        };
        return (0, t.jsxs)(g, {
          homeHeader: n.homeHeader,
          children: [
            (0, t.jsx)("div", {
              className: "ti-container bx-brd-box py-4",
              children: (0, t.jsx)("div", {
                className: "Header",
                children: (0, t.jsxs)("div", {
                  className: "row d-flex align-items-center",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-6 col-md-4 col-lg-2 ord1 c-pointer",
                      children: (0, t.jsx)(b.Z, {
                        href: "\\",
                        className: "logo",
                        children: (0, t.jsx)(r(), {
                          height: 42,
                          width: 274,
                          src: "/images/icons/GD-Logo.png",
                          alt: "Logo",
                        }),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "col-12 col-md-5 col-lg-6 ord2 mt-3 mt-md-0",
                      children: (0, t.jsxs)("div", {
                        className: "searchBar",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "title-btn",
                            onClick: () => E(!_),
                            children: [
                              (0, t.jsxs)(h.WC, {
                                size: "large",
                                className: "",
                                children: [
                                  S,
                                  (0, t.jsx)(s.Z, {
                                    className: "down-arrow",
                                    width: 12,
                                    height: 6,
                                  }),
                                ],
                              }),
                              _ &&
                                (0, t.jsx)(T, { selected: S, setSelected: P }),
                            ],
                          }),
                          (0, t.jsxs)("form", {
                            onSubmit: F,
                            className: "form",
                            children: [
                              (0, t.jsx)(m.o, {
                                type: "text",
                                value: x,
                                onChange: (n) => u(n.target.value),
                                label: "Search Product Keyword",
                                variant: "placeholder",
                                leftIcon: (0, t.jsx)(a.Z, {
                                  width: "18px",
                                  color:
                                    p.Z.colors.theme_info.text_color.dark_gray,
                                  height: "18px",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "searchBtn",
                                children: (0, t.jsxs)(h.WC, {
                                  className: "searchBtnCustom",
                                  size: "large",
                                  type: "submit",
                                  children: [
                                    (0, t.jsx)(v.o0, {
                                      className: "Body3R d-none d-md-block",
                                      children: "Search",
                                    }),
                                    (0, t.jsx)(a.Z, {
                                      className:
                                        "d-block d-md-none search-icon",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (null == O ? void 0 : O.fname)
                      ? (0, t.jsxs)("div", {
                          className: "col-6 col-md-3 col-lg-4 ord3",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "d-flex align-items-center justify-content-between",
                              children: [
                                (0, t.jsx)("a", {
                                  href: "https://www.tradeindia.com/",
                                  className:
                                    "d-none d-md-block visit-ti-link loggedIn",
                                  children: "Visit Tradeindia",
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "d-none d-md-flex justify-content-md-end login-pop-cont",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "d-flex align-items-center no-dec",
                                      onClick: () => B(!0),
                                      children: [
                                        "Hi ",
                                        null == O ? void 0 : O.fname,
                                        " ",
                                        (0, t.jsx)(s.Z, {
                                          width: 16,
                                          height: 16,
                                          className: "ml-2",
                                        }),
                                      ],
                                    }),
                                    A &&
                                      (0, t.jsxs)("div", {
                                        className: "login-popup",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className:
                                              "d-flex justify-content-between align-items-center",
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className:
                                                  "d-flex align-items-center",
                                                children: [
                                                  (0, t.jsx)(l.Z, {
                                                    width: 20,
                                                    height: 20,
                                                    className: "mr-2",
                                                  }),
                                                  (0, t.jsx)("a", {
                                                    href:
                                                      (0, k.K)().DOMAIN_URI +
                                                      "/my-account/",
                                                    className: "link-normal",
                                                    children: (0, t.jsxs)(
                                                      v.GV,
                                                      {
                                                        className: "Body3R",
                                                        children: [
                                                          "Hii ",
                                                          null ===
                                                            (e =
                                                              n.userDetail_res) ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.fname,
                                                          " ",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, t.jsx)(d.Z, {
                                                width: 16,
                                                height: 16,
                                                className: "c-pointer",
                                                onClick: () => B(!1),
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "border-line btm-line mt-4 mb-3",
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "d-flex align-items-center",
                                            children: (0, t.jsx)("a", {
                                              href:
                                                (0, k.K)().DOMAIN_URI +
                                                "/my-account/my-distributors.html ",
                                              className: "link-normal ",
                                              children: (0, t.jsx)(v.$X, {
                                                className:
                                                  "d-flex align-items-center c-pointer mb-2",
                                                children: "My Distributors",
                                              }),
                                            }),
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "d-flex align-items-center",
                                            children: (0, t.jsx)("a", {
                                              href:
                                                (0, k.K)().DOMAIN_URI +
                                                "/my-account/my-franchises.html ",
                                              className: "link-normal",
                                              children: (0, t.jsx)(v.$X, {
                                                className:
                                                  "d-flex align-items-center c-pointer mb-2",
                                                children: "My Franchises",
                                              }),
                                            }),
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "d-flex align-items-center",
                                            children: (0, t.jsx)("a", {
                                              href: "https://www.tradeindia.com/my-tradeindia/inquiries/inquiries-inbox.html?inquiry_source=GD_INQ  ",
                                              className: "link-normal",
                                              children: (0, t.jsx)(v.$X, {
                                                className:
                                                  "d-flex align-items-center c-pointer mb-2",
                                                children: "My Inquiries",
                                              }),
                                            }),
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "border-line btm-line mt-4 mb-3",
                                          }),
                                          (0, t.jsxs)("div", {
                                            className:
                                              "d-flex align-items-center",
                                            children: [
                                              (0, t.jsx)(c.Z, {
                                                className: "mr-2",
                                                width: 16,
                                                height: 16,
                                                onClick: () => {
                                                  U(), B(!1);
                                                },
                                              }),
                                              " ",
                                              (0, t.jsx)(v.$X, {
                                                className:
                                                  "d-flex align-items-center c-pointer",
                                                onClick: () => {
                                                  U(), B(!1);
                                                },
                                                children: "Logout",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "loggedin-link-div",
                              children: [
                                (0, t.jsx)("a", {
                                  href: "https://www.tradeindia.com/",
                                  className:
                                    "d-block d-md-none visit-ti-link loggedInmob",
                                  children: "Visit Tradeindia",
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "d-flex justify-content-end d-md-none loginlogo",
                                  onClick: () => y(!0),
                                  children: (0, t.jsx)(r(), {
                                    src: "/images/icons/gp-header.svg",
                                    alt: "sign in/sign up",
                                    width: 20,
                                    height: 20,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className: "col-6 col-md-3 col-lg-4 ord3",
                          children: (0, t.jsxs)("div", {
                            className:
                              "d-flex align-items-center justify-content-end justify-content-md-between",
                            children: [
                              (0, t.jsx)("a", {
                                href: "https://www.tradeindia.com/",
                                className: "visit-ti-link",
                                children: "Visit Tradeindia",
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "loginBar d-md-flex  d-none",
                                    children: [
                                      (0, t.jsx)(b.Z, {
                                        className: "items ",
                                        href: "/signIn",
                                        children: "Sign In",
                                      }),
                                      (0, t.jsx)(b.Z, {
                                        className: "items joinFree",
                                        href: "/joinFree",
                                        children: "Join Free",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "d-flex justify-content-end d-md-none grid-img",
                                    onClick: () => y(!0),
                                    children: (0, t.jsx)(r(), {
                                      src: "/images/icons/gp-header.svg",
                                      alt: "sign in/sign up",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(R.Z, {
              dType: "Popup",
              mType: "Popup",
              setPopup: y,
              popup: f,
              bgClose: !0,
              children: (0, t.jsx)(N, {
                pyrOnclick: n.pyrOnclick,
                setPopup: y,
                LoggedInData: z,
                logoutinfo: U,
                setIsLoggedIn: B,
                userDetail_res: O,
              }),
            }),
          ],
        });
      };
      var A = P;
    },
    3889: function (n, e, i) {
      var t = i(7297),
        o = i(5893);
      i(7294);
      var r = i(1649),
        s = i(9521),
        a = i(5675),
        l = i.n(a);
      function d() {
        let n = (0, t.Z)([
          "\n      .popupClose {\n        right: 1rem;\n        top: 1rem;\n      }\n      .popupWrap {\n        animation: popup 0.4s forwards;\n        top: 35px;\n        width: calc(100% - 70px);\n        /* height: calc(100vh - 70px); */\n        max-height: 650px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        border-radius: 0;\n      }\n      @keyframes popup {\n        from {\n          opacity: 0;\n          top: 0;\n        }\n\n        to {\n          opacity: 1;\n          top: 35px;\n        }\n      }\n    ",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, t.Z)([
          "\n      .popupClose {\n        right: 1rem;\n        top: -14px;\n      }\n      .popupWrap {\n        animation: BottomSheet 0.4s forwards;\n        top: auto;\n        width: 100%;\n        left: 0;\n        transform: translate(0, 0);\n        /* height: calc(100vh - 120px); */\n        /* height: calc(100vh - 80px); */\n        border-radius: 24px 24px 0px 0px;\n      }\n      @keyframes BottomSheet {\n        from {\n          opacity: 0;\n          bottom: -35px;\n        }\n\n        to {\n          opacity: 1;\n          bottom: 0;\n        }\n      }\n    ",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, t.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 480px;\n          min-height: 330px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        let n = (0, t.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 300px;\n          min-height: 150px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, t.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 650px;\n          min-height: 150px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, t.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 610px;\n          min-height: 150px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        let n = (0, t.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: -14px;\n        }\n        .popupWrap {\n          animation: BottomSheet 0.4s forwards;\n          top: auto;\n          width: 100%;\n          left: 0;\n          transform: translate(0, 0);\n          height: calc(100vh - 120px);\n          border-radius: 24px 24px 0px 0px;\n        }\n        @keyframes BottomSheet {\n          from {\n            opacity: 0;\n            bottom: -35px;\n          }\n\n          to {\n            opacity: 1;\n            bottom: 0;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        let n = (0, t.Z)([
          "\n  position: absolute;\n  z-index: 17;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  .popBg {\n    background-color: rgba(0, 0, 0, 0.7);\n    cursor: pointer;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n  .popupClose {\n    background-color: #fff;\n    /* border-radius: 50%; */\n    /* background-color: #fbf6f1; */\n    background-color: ",
          ";\n    height: 32px;\n    position: absolute;\n    right: 1rem;\n    top: -14px;\n    width: 32px;\n    z-index: 2;\n    border: none;\n    cursor: pointer;\n  }\n  .popupWrap {\n    /* background-color: #fff; */\n    background-color: ",
          ";\n    position: fixed;\n    top: 20% !important;\n    z-index: 4;\n    border-radius: 20px !important;\n    overflow: hidden;\n    height: ",
          ";\n  }\n  div.popupWrap.smallpopup {\n    width: 92%;\n    height: auto;\n    padding: 20px;\n  }\n  div.popupWrap.smallpopup .popupClose {\n    right: 1rem;\n    top: -1rem;\n  }\n  div.popupWrap.smallMidpopup {\n    width: 92%;\n    height: auto;\n    padding: 20px;\n  }\n  div.popupWrap.smallMidpopup .popupClose {\n    right: 1rem;\n    top: -1rem;\n  }\n  @media screen and (min-width: 767px) {\n    div.popupWrap.smallpopup {\n      width: 480px;\n      height: auto;\n      padding: 20px;\n    }\n    div.popupWrap.smallpopup .popupClose {\n      right: -0.5rem;\n      top: -0.5rem;\n    }\n    div.popupWrap.smallMidpopup {\n      width: 625px;\n      height: auto;\n      padding: 30px 40px;\n    }\n    div.popupWrap.smallMidpopup .popupClose {\n      right: -0.5rem;\n      top: -0.5rem;\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n    ",
          "\n    ",
          "\n  ",
          "\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      let g = (n) => {
        let {
            children: e,
            dType: i,
            mType: t,
            setPopup: s,
            popup: a,
            bgClose: d,
            customClass: c,
            catPopup: p,
          } = n,
          h = (0, r.I0)(),
          m = () => {
            setTimeout(() => {
              h({ type: "@POPUP_DEACTIVE" });
            }, 1e3);
          },
          x = () => {
            (null == n ? void 0 : n.resetOtp) && n.resetOtp(),
              (null == n ? void 0 : n.setSearchText) &&
                (null == n || n.setSearchText("")),
              s(!1);
          },
          u = () => {
            d && (s(!1), m());
          };
        return (0, o.jsx)(o.Fragment, {
          children:
            a &&
            (0, o.jsxs)(b, {
              dType: i,
              mType: t,
              catPopup: p,
              sendProposalForm: n.sendProposalForm,
              loggedInPopup: n.loggedInPopup,
              askourexpertPopup: n.askourexpertPopup,
              children: [
                (0, o.jsxs)("div", {
                  className: c ? "popupWrap " + c : "popupWrap",
                  children: [
                    (0, o.jsx)("button", {
                      onClick: () => {
                        x(), n.secondAtt && n.secondAtt(), m();
                      },
                      className: "p-1 popupClose",
                      children: (0, o.jsx)(l(), {
                        src: "/images/icons/popup-close.svg",
                        width: 12,
                        loading: "lazy",
                        height: 12,
                        alt: "close",
                      }),
                    }),
                    e,
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "popBg",
                  onClick: u,
                  children: "\xa0",
                }),
              ],
            }),
        });
      };
      e.Z = g;
      let b = s.ZP.div.withConfig({ componentId: "sc-d2e8b6d0-0" })(
        f(),
        (n) => (n.catPopup ? "#fbf6f1" : "#fff"),
        (n) => (n.catPopup ? "transparent" : "#fff"),
        (n) => (n.sendProposalForm ? "500px" : "auto"),
        (n) => "Popup" === n.mType && (0, s.iv)(d()),
        (n) => "BottomSheet" === n.mType && (0, s.iv)(c()),
        (n) => "Popup" === n.dType && (0, s.iv)(p()),
        (n) => "Popup" === n.dType && n.loggedInPopup && (0, s.iv)(h()),
        (n) => "Popup" === n.dType && n.sendProposalForm && (0, s.iv)(m()),
        (n) => "Popup" === n.dType && n.askourexpertPopup && (0, s.iv)(x()),
        (n) => "BottomSheet" === n.dType && (0, s.iv)(u())
      );
    },
  },
]);
