(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(6057);
        },
      ]);
    },
    6057: function (n, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return nG;
          },
        });
      var t = i(5893),
        o = i(7294),
        r = i(7297),
        s = i(9521),
        a = i(9501),
        l = i(9692),
        d = i(5675),
        c = i.n(d),
        p = i(5169),
        m = i(4681),
        h = i(9386),
        x = i(6412);
      function u() {
        let n = (0, r.Z)([
          "\n  width: 100%;\n  padding: 15px;\n  background: #ffffff;\n  border: 1px solid #d2dae0;\n  border-radius: 16px;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ";\n        }\n      }\n    }\n  }\n  .customerImg {\n    width: 56px;\n    height: 56px;\n    img {\n      width: 56px;\n      height: 56px;\n      border-radius: 100%;\n      object-fit: contain;\n    }\n    .customerNoImg {\n      width: 56px;\n      height: 56px;\n      border-radius: 100%;\n      border: 1px solid #daecda;\n      background-color: #f0fef0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 24px;\n      font-weight: 700;\n      text-transform: uppercase;\n      color: #4da980;\n    }\n  }\n  .customerInfo {\n    padding-left: 6px;\n    .tpHeading {\n      color: ",
          ";\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      width: 180px;\n    }\n  }\n  .txt-transform {\n    text-transform: none;\n  }\n  .coutomerCpDetl {\n    margin-top: 15px;\n  }\n  button {\n    background: #f35b04;\n    border-radius: 36px;\n    width: 100%;\n    margin-top: 15px;\n  }\n  .viewDtl {\n    color: #253c78;\n    a {\n      text-decoration: none;\n    }\n  }\n  .chips {\n    display: inline-flex;\n    background: #fff6ed;\n    border-radius: 50px;\n    padding: 3px 1rem;\n    font-weight: 400;\n    font-size: 10px;\n    line-height: 24px;\n    color: #e07f23;\n    margin-bottom: 0.5rem;\n  }\n  .no-decoration {\n    text-decoration: none;\n  }\n\n  @media (min-width: 768px) {\n    /* .tpHeading {\n      width: 180px;\n    } */\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      let b = (n) => {
          var e, i, o, r, s, d, u, b;
          return (0, t.jsxs)(f, {
            children: [
              (0, t.jsxs)("div", {
                className: "customerDtls d-flex",
                children: [
                  (0, t.jsx)("div", {
                    className: "customerImg",
                    children: (0, t.jsx)(c(), {
                      src:
                        null === (e = n.recentData) || void 0 === e
                          ? void 0
                          : e.logo_path,
                      alt:
                        null === (i = n.recentData) || void 0 === i
                          ? void 0
                          : i.category_name,
                      width: 56,
                      height: 56,
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "customerInfo",
                    children: [
                      (0, t.jsx)("span", {
                        className: "chips",
                        children:
                          null === (o = n.recentData) || void 0 === o
                            ? void 0
                            : o.category_name,
                      }),
                      (0, t.jsx)(h.Z, {
                        href:
                          (0, x.K)().DOMAIN_URI +
                          "/distributors/" +
                          (null === (r = n.recentData) || void 0 === r
                            ? void 0
                            : r.profile_link),
                        className: "no-decoration",
                        children: (0, t.jsx)("div", {
                          className:
                            "tpHeading text16 fW700 urbanistFont txt-transform",
                          children:
                            null === (s = n.recentData) || void 0 === s
                              ? void 0
                              : s.co_name,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "coutomerCpDetl",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-between mb-2",
                    children: [
                      (0, t.jsx)(m.o0, {
                        className: "Body4R",
                        color: a.Z.colors.theme_secondary[100],
                        children: "Investment price range",
                      }),
                      (0, t.jsxs)(m.GV, {
                        className: "Body4R",
                        dfontWeight: 500,
                        mfontWeight: 500,
                        color: a.Z.colors.theme_secondary[200],
                        children: [
                          "₹",
                          null === (d = n.recentData) || void 0 === d
                            ? void 0
                            : d.investment_range,
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-between mb-2",
                    children: [
                      (0, t.jsx)(m.o0, {
                        className: "Body4R",
                        color: a.Z.colors.theme_secondary[100],
                        children: "Founded in",
                      }),
                      (0, t.jsx)(m.$X, {
                        className: "Body4R",
                        dfontWeight: 500,
                        mfontWeight: 500,
                        color: a.Z.colors.theme_secondary[200],
                        children:
                          null === (u = n.recentData) || void 0 === u
                            ? void 0
                            : u.founded_in,
                      }),
                    ],
                  }),
                  (0, t.jsx)(h.Z, {
                    href:
                      (0, x.K)().DOMAIN_URI +
                      "/distributors/" +
                      (null === (b = n.recentData) || void 0 === b
                        ? void 0
                        : b.profile_link),
                    className: "no-decoration",
                    children: (0, t.jsxs)(l.WC, {
                      size: "default",
                      children: [
                        (0, t.jsx)(m.GV, {
                          className: "Body3R",
                          children: "View ",
                        }),
                        (0, t.jsx)(p.Z, { className: "ml-1 mt-1" }),
                        " ",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        f = s.ZP.div.withConfig({ componentId: "sc-910b669b-0" })(
          u(),
          a.Z.colors.theme_primary.main,
          a.Z.colors.theme_primary.main,
          a.Z.colors.theme_info.text_color.dim_black
        );
      var g = i(6066),
        v = i(2954);
      function w() {
        let n = (0, r.Z)([
          '\n  div.slick-slide {\n    width: calc(100vw - 54px);\n  }\n  button.slick-next,\n  button.slick-prev {\n    background-color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: solid 1px #f35b04;\n    z-index: 2;\n    top: 60px;\n  }\n  button.slick-prev {\n    padding: 0 0 0 4px;\n    left: calc(100% - 5rem);\n    top: -3.5rem;\n  }\n  button.slick-next {\n    padding: 0 4px 0 0;\n    right: 0;\n    top: -3.5rem;\n  }\n\n  div.slick-slide > div {\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n  .slick-list {\n    margin: 0px -10px 0px -10px;\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n  button.slick-prev:before,\n  button.slick-next:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 8px;\n    height: 8px;\n    border-right: solid 1px #f35b04;\n    border-top: solid 1px #f35b04;\n    transform: rotate(-135deg);\n  }\n  button.slick-next:before {\n    transform: rotate(45deg);\n  }\n  button.slick-next:hover,\n  button.slick-prev:hover {\n    background-color: #f35b04;\n  }\n  button.slick-prev:hover:before,\n  button.slick-next:hover:before {\n    border-color: #fff;\n  }\n  /* .slick-arrow {\n    display: none !important;\n  } */\n  .slick-slider:hover .slick-arrow {\n    display: block !important;\n  }\n  .heading {\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    color: #323a43;\n    font-family: "Urbanist";\n  }\n  .slick-initialized .slick-slide:first-child {\n    display: block;\n    width: calc(100vw - 54px);\n  }\n  @media screen and (min-width: 576px) {\n    .heading {\n      font-size: 32px;\n      line-height: 24px;\n    }\n    div.slick-slide {\n      width: inherit;\n    }\n    button.slick-arrow.slick-prev.slick-disabled,\n    button.slick-arrow.slick-next.slick-disabled {\n      border-color: #d7d7d7;\n    }\n    .slick-prev.slick-disabled:hover,\n    .slick-next.slick-disabled:hover {\n      background-color: white;\n    }\n    .slick-prev.slick-disabled:hover:before,\n    .slick-next.slick-disabled:hover:before {\n      border-color: #f35b04;\n    }\n    .slick-initialized .slick-slide:first-child {\n      display: block;\n      width: 0px !important;\n    }\n  }\n',
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      let j = (n) => {
          let { className: e, children: i } = n;
          return (0, t.jsx)(v.X, {
            children: (0, t.jsxs)(k, {
              className: e,
              children: [
                (0, t.jsx)("div", { className: "mb-4", ref: n.refProp }),
                (0, t.jsx)(g.Z, {
                  dots: !1,
                  infinite: !1,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: !0,
                  autoplay: !0,
                  autoplaySpeed: 3e3,
                  pauseOnHover: !1,
                  responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: !1,
                      },
                    },
                    {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        variableWidth: !0,
                      },
                    },
                  ],
                  children: i,
                }),
              ],
            }),
          });
        },
        k = s.ZP.div.withConfig({ componentId: "sc-9f7b4dd4-0" })(w());
      function y() {
        let n = (0, r.Z)([
          '\n  margin-top: 52px;\n  .ra-heading {\n    font-family: "Urbanist";\n    font-weight: 600;\n    color: #323a43;\n  }\n  .topFistCard {\n    width: 100%;\n    height: 222px;\n    margin-top: 6px;\n    background: ',
          ";\n    color: ",
          ';\n    border-radius: 16px;\n    padding: 25px;\n    display: flex;\n    align-items: end;\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 32px;\n    font-family: "Urbanist";\n  }\n  @media (min-width: 768px) {\n    .topFistCard {\n      height: 222px;\n      margin-top: 24px;\n    }\n  }\n',
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      let N = (n) => {
          var e, i, o, r;
          return (0, t.jsxs)(_, {
            className: "mb-5",
            children: [
              (null === (e = n.recentAddeddistibutordata) || void 0 === e
                ? void 0
                : e.length) > 0 &&
                (0, t.jsx)("h2", {
                  className: "h2 ra-heading",
                  children: "Discover the Latest Distributorship Opportunities",
                }),
              (null === (i = n.recentAddeddistibutordata) || void 0 === i
                ? void 0
                : i.length) > 0 &&
                (0, t.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, t.jsx)("div", {
                      className: "col-12 col-md-3  mb-md-0",
                      children: (0, t.jsxs)("div", {
                        className: "topFistCard mb-3 d-none d-md-flex",
                        children: [
                          "Recently",
                          (0, t.jsx)("br", {}),
                          "Added",
                          (0, t.jsx)("br", {}),
                          "Distributorships",
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "col-12 col-md-9",
                      children: (0, t.jsxs)(j, {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "topFistCard  mb-3 d-md-none d-flex",
                            children: [
                              "Recently",
                              (0, t.jsx)("br", {}),
                              "Added",
                              (0, t.jsx)("br", {}),
                              "Distributorships",
                            ],
                          }),
                          (null === (o = n.recentAddeddistibutordata) ||
                          void 0 === o
                            ? void 0
                            : o.length) > 0 &&
                            (null === (r = n.recentAddeddistibutordata) ||
                            void 0 === r
                              ? void 0
                              : r.map((n, e) =>
                                  (0, t.jsx)(
                                    "div",
                                    {
                                      className: "col-md-4 mb-3 mb-md-0",
                                      children: (0, t.jsx)(b, {
                                        recentData: n,
                                      }),
                                    },
                                    e
                                  )
                                )),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        _ = s.ZP.div.withConfig({ componentId: "sc-a4990d2a-0" })(
          y(),
          a.Z.colors.theme_card_3.background,
          a.Z.colors.white
        );
      var Z = i(8994);
      function D() {
        let n = (0, r.Z)([
          '\n  .cusorpointer {\n    cursor: pointer;\n  }\n  .head-style {\n    font-family: "Urbanist";\n    font-weight: 600;\n    color: #323a43;\n  }\n  .more-cat-link {\n    text-decoration: none;\n    background: #f35b04;\n    border: 1px solid #f35b04;\n    border-radius: 36px;\n    text-align: center;\n    color: #fff;\n    width: 100%;\n    padding: 12px 20px;\n  }\n  @media (min-width: 768px) {\n    .more-cat-link {\n      width: 190px;\n    }\n  }\n',
        ]);
        return (
          (D = function () {
            return n;
          }),
          n
        );
      }
      let I = (n) => {
          var e;
          let [i, r] = (0, o.useState)(12),
            [s, a] = (0, o.useState)(n.homedistributorshipdata);
          return (0, t.jsx)(W, {
            children:
              (null == s ? void 0 : s.length) > 0 &&
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: "col-12",
                    children: (0, t.jsx)("h2", {
                      className: "h2 mb-3 head-style",
                      children: "Featured Distributorship Opportunities",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row mb-4",
                    children:
                      (null == s ? void 0 : s.length) > 0 &&
                      (null == s
                        ? void 0
                        : s
                            .slice(0, i)
                            .map((n, e) =>
                              (0, t.jsx)(
                                "div",
                                {
                                  className: "col-6 col-md-3 custom-margin",
                                  children: (0, t.jsx)(Z.Z, { data: n }),
                                },
                                e
                              )
                            )),
                  }),
                  (null == s ? void 0 : s.length) > 12 &&
                    (0, t.jsx)("div", {
                      className:
                        "d-flex justify-content-center justify-content-md-end mb-3 mt-0 mt-md-2 cusorpointer",
                      children: (0, t.jsx)("div", {
                        className:
                          "more-cat-link d-flex  justify-content-center ",
                        children: (0, t.jsxs)(m.ks, {
                          className: "Body3R d-flex align-items-center ",
                          onClick: async () => {
                            var e, t, o, l;
                            let d = await (null ===
                              (e = n.homedistributorshipdata) || void 0 === e
                              ? void 0
                              : e.slice(i, i + 50));
                            i <
                            (null === (t = n.homedistributorshipdata) ||
                            void 0 === t
                              ? void 0
                              : t.length)
                              ? (r(i + 51), a([...s, ...d]))
                              : (r(12),
                                a(
                                  null === (l = n.homedistributorshipdata) ||
                                    void 0 === l
                                    ? void 0
                                    : l.slice(0, 12)
                                )),
                              i >=
                                (null === (o = n.homedistributorshipdata) ||
                                void 0 === o
                                  ? void 0
                                  : o.length) && n.fatuteDistrubutorshipClick();
                          },
                          children: [
                            i >=
                            (null === (e = n.homedistributorshipdata) ||
                            void 0 === e
                              ? void 0
                              : e.length)
                              ? "View Less"
                              : "View More",
                            " ",
                            (0, t.jsx)(p.Z, {
                              width: 20,
                              height: 16,
                              className: "ml-1",
                            }),
                          ],
                        }),
                      }),
                    }),
                ],
              }),
          });
        },
        W = s.ZP.div.withConfig({ componentId: "sc-b5a5765-0" })(D());
      var C = i(6500),
        R = i(5486);
      function B() {
        let n = (0, r.Z)([
          "\n  .c-custom {\n    color: #323a43;\n  }\n  background: #f6f7fa;\n  border-radius: 40px;\n  padding: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-flow: wrap;\n  h2 {\n    width: 100%;\n  }\n  .item {\n    width: calc(20% - 24px);\n    margin-bottom: 24px;\n  }\n  .featured-f-cont {\n    width: 20%;\n    margin-bottom: 24px;\n  }\n  @media (max-width: 768px) {\n    background: none;\n    padding: 0px;\n    .featured-f-cont {\n      width: 50%;\n    }\n  }\n  .custom-margin:nth-child(odd) {\n    padding-right: 6px;\n  }\n  .custom-margin:nth-child(even) {\n    padding-left: 6px;\n  }\n  @media (max-width: 576px) {\n    //\n  }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      let P = (n) => {
          var e, i, o;
          return (0, t.jsxs)(O, {
            className: "mt-3 mt-md-5 mb-5",
            children: [
              (null === (e = n.franchisescompdataList) || void 0 === e
                ? void 0
                : e.length) > 1 &&
                (0, t.jsx)("h2", {
                  className: "h2 fW600 mb-3 c-custom",
                  children: "Featured Franchise Opportunities",
                }),
              (0, t.jsx)("div", {
                className: "row featured-row",
                children:
                  (null === (i = n.franchisescompdataList) || void 0 === i
                    ? void 0
                    : i.length) > 1 &&
                  (null === (o = n.franchisescompdataList) || void 0 === o
                    ? void 0
                    : o.map((n, e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: "featured-f-cont custom-margin",
                            children: (0, t.jsx)(R.Z, { data: n }),
                          },
                          e
                        )
                      )),
              }),
            ],
          });
        },
        O = s.ZP.div.withConfig({ componentId: "sc-fa1b34fc-0" })(B());
      var S = i(4612),
        T = i(6635),
        z = i(147),
        E = i(4290),
        A = i(572);
      function L() {
        let n = (0, r.Z)([
          "\n  background: #ffffff;\n  border: 1px solid #cbd5e0;\n  border-radius: 32px;\n  padding: 16px;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ';\n        }\n      }\n    }\n  }\n  .ebrand-img {\n    width: 70px;\n    height: 70px;\n    border: 1px solid #cbd5e0;\n    border-radius: 65px;\n    overflow: auto;\n    padding: 2px;\n  }\n  .ebrand-img img {\n    object-fit: contain;\n  }\n  .ebrand-link {\n    text-decoration: none;\n  }\n  .ebrand-title {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 22px;\n    font-family: "Urbanist";\n    color: #323a43;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 176px;\n    margin-top: -6px;\n  }\n  @media (min-width: 768px) {\n    margin-bottom: 24px;\n  }\n',
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      let U = (n) => {
          var e, i, o, r, s, l, d, p, u, b, f;
          return (0, t.jsxs)(H, {
            children: [
              (0, t.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "ebrand-img d-flex align-items-center justify-content-center mr-2 pr-1",
                    children: (0, t.jsx)(h.Z, {
                      href:
                        (0, x.K)().DOMAIN_URI +
                        (null === (e = n.ExclusiveBrand) || void 0 === e
                          ? void 0
                          : e.company_link),
                      className: "ebrand-link",
                      children: (0, t.jsx)(c(), {
                        src:
                          null === (i = n.ExclusiveBrand) || void 0 === i
                            ? void 0
                            : i.logo_path,
                        alt:
                          null === (o = n.ExclusiveBrand) || void 0 === o
                            ? void 0
                            : o.category,
                        width: 54,
                        height: 54,
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)(h.Z, {
                        href:
                          (0, x.K)().DOMAIN_URI +
                          (null === (r = n.ExclusiveBrand) || void 0 === r
                            ? void 0
                            : r.cate_link),
                        className: "ebrand-link",
                        children: (0, t.jsx)(A.Z, {
                          content:
                            null === (s = n.ExclusiveBrand) || void 0 === s
                              ? void 0
                              : s.category,
                        }),
                      }),
                      (0, t.jsx)(h.Z, {
                        href:
                          (0, x.K)().DOMAIN_URI +
                          (null === (l = n.ExclusiveBrand) || void 0 === l
                            ? void 0
                            : l.company_link),
                        className: "ebrand-link",
                        children: (0, t.jsx)("p", {
                          className: "ebrand-title",
                          children:
                            null === (d = n.ExclusiveBrand) || void 0 === d
                              ? void 0
                              : d.brand_name,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "d-flex justify-content-between",
                children: [
                  (null === (p = n.ExclusiveBrand) || void 0 === p
                    ? void 0
                    : p.investment_range) &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(m.o0, {
                          color: a.Z.colors.theme_secondary[100],
                          className: "Body4R",
                          children: "Investment price range",
                        }),
                        (0, t.jsx)(m.o0, {
                          color: a.Z.colors.theme_secondary[200],
                          dfontWeight: 500,
                          mfontWeight: 500,
                          className: "Body4R",
                          children:
                            null === (u = n.ExclusiveBrand) || void 0 === u
                              ? void 0
                              : u.investment_range,
                        }),
                      ],
                    }),
                  (null === (b = n.ExclusiveBrand) || void 0 === b
                    ? void 0
                    : b.experience) &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(m.o0, {
                          color: a.Z.colors.theme_secondary[100],
                          className: "Body4R",
                          children: "Experience",
                        }),
                        (0, t.jsx)(m.o0, {
                          color: a.Z.colors.theme_secondary[200],
                          dfontWeight: 500,
                          mfontWeight: 500,
                          className: "Body4R",
                          children:
                            null === (f = n.ExclusiveBrand) || void 0 === f
                              ? void 0
                              : f.experience,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        H = s.ZP.div.withConfig({ componentId: "sc-44c054a5-0" })(
          L(),
          a.Z.colors.theme_primary.main,
          a.Z.colors.theme_primary.main
        );
      var M = i(4856),
        F = i(5213),
        G = i(3666),
        K = i(3889),
        V = i(1649),
        X = i(1475);
      function q() {
        let n = (0, r.Z)([
          "\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #cbd5e0;\n  border-radius: 32px;\n  padding: 12px;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ';\n        }\n      }\n    }\n  }\n  .bd-img {\n    background: linear-gradient(0deg, #f0fef0, #f0fef0), url(Img - 11);\n    border: 1px solid #daecda;\n    width: 32px;\n    height: 32px;\n    border-radius: 100%;\n  }\n  .overflow-1 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  .gd-assured-image {\n    position: absolute;\n    top: 34px;\n    left: 32px;\n  }\n  .gd-assured-image img {\n    width: 16px;\n    height: 16px;\n  }\n  .s-letter {\n    color: #4da980;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 24px;\n    font-family: "Urbanist";\n    text-transform: uppercase;\n  }\n  .bd-title-text {\n    text-transform: none;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 19px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    width: 100px;\n  }\n\n  .send-btn button {\n    padding: 16px;\n    color: #fff;\n    background: #f35b04;\n    border: 1px solid #f35b04;\n    border-radius: 36px;\n    width: 100%;\n    font-family: "Ubuntu";\n    font-style: normal;\n  }\n  .line-brk {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n    height: 40px;\n  }\n  @media (min-width: 768px) {\n    padding: 12px;\n    .gd-assured-image {\n      position: absolute;\n      left: 88%;\n      top: 20px;\n    }\n    .bd-img {\n      width: 56px;\n      height: 56px;\n    }\n    .gd-assured-image img {\n      width: auto;\n      height: auto;\n    }\n    .s-letter {\n      font-size: 24px;\n      line-height: 24px;\n    }\n    .bd-title-text {\n      font-size: 18px;\n      width: 200px;\n    }\n    .send-btn button {\n      padding: 8px;\n    }\n    .overflow-1 {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      width: auto;\n    }\n  }\n',
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      let $ = (n) => {
          var e, i, r, s, d, h, x, u, b, f, g;
          let [v, w] = (0, o.useState)(!1),
            [j, k] = (0, o.useState)(""),
            y = (0, V.I0)(),
            N = (0, V.v9)((n) => n.GDHomeApi.sendproposalApi);
          return (
            (0, o.useEffect)(() => {
              if (null == N ? void 0 : N.sendproposalres) {
                var n, e;
                (null == N
                  ? void 0
                  : null === (n = N.sendproposalres) || void 0 === n
                  ? void 0
                  : n.status) &&
                  (k(
                    null == N
                      ? void 0
                      : null === (e = N.sendproposalres) || void 0 === e
                      ? void 0
                      : e.status
                  ),
                  y({ type: X.i4.RESET_ALL_ASK }));
              }
            }, [null == N ? void 0 : N.sendproposalres]),
            (0, t.jsxs)(Y, {
              children: [
                (0, t.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "bd-img d-flex align-items-center justify-content-center mr-2 pr-1",
                      children: (0, t.jsx)("span", {
                        className: "s-letter",
                        children:
                          null === (e = n.becomeDistributorData) || void 0 === e
                            ? void 0
                            : e.logo_name,
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(A.Z, {
                          content:
                            null === (i = n.becomeDistributorData) ||
                            void 0 === i
                              ? void 0
                              : i.category_name,
                          cWidth: !0,
                        }),
                        (0, t.jsx)("p", {
                          className: "bd-title-text",
                          children:
                            null === (r = n.becomeDistributorData) ||
                            void 0 === r
                              ? void 0
                              : r.partially_co_name,
                        }),
                      ],
                    }),
                    (0, t.jsx)("span", {
                      className: "gd-assured-image",
                      children: (0, t.jsx)(c(), {
                        src: "/images/icons/gd-assured.svg",
                        alt: "Gd Assured",
                        width: 24,
                        height: 24,
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "d-flex align-items-center",
                  children: [
                    (0, t.jsx)(M.Z, {
                      width: 14,
                      height: 14,
                      className: "mr-2",
                    }),
                    (0, t.jsxs)(m.Ix, {
                      className: "mb-2 Body4R overflow-1 mt-2",
                      color: a.Z.colors.theme_secondary[200],
                      children: [
                        null === (s = n.becomeDistributorData) || void 0 === s
                          ? void 0
                          : s.city,
                        " ,",
                        " ",
                        null === (d = n.becomeDistributorData) || void 0 === d
                          ? void 0
                          : d.state,
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "d-flex align-items-center justify-content-between",
                  children: [
                    (0, t.jsx)(m.o0, {
                      color: a.Z.colors.theme_secondary[100],
                      className: "Body4R d-none d-md-block",
                      children: "Investment capacity",
                    }),
                    (0, t.jsx)(c(), {
                      src: "/images/icons/money.svg",
                      alt: "money",
                      width: 18,
                      height: 18,
                      className: "d-block d-md-none",
                    }),
                    (0, t.jsxs)(m.o0, {
                      color: a.Z.colors.theme_secondary[200],
                      dfontWeight: 500,
                      mfontWeight: 500,
                      className: "Body4R",
                      children: [
                        "₹ ",
                        null === (h = n.becomeDistributorData) || void 0 === h
                          ? void 0
                          : h.min_investment,
                        " ",
                        null === (x = n.becomeDistributorData) || void 0 === x
                          ? void 0
                          : x.investment_unit,
                        " -",
                        " ",
                        null === (u = n.becomeDistributorData) || void 0 === u
                          ? void 0
                          : u.max_investment,
                        " ",
                        null === (b = n.becomeDistributorData) || void 0 === b
                          ? void 0
                          : b.investment_unit,
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "d-flex align-items-center justify-content-between mb-2 pb-1",
                  children: [
                    (0, t.jsx)(m.o0, {
                      color: a.Z.colors.theme_secondary[100],
                      className: "Body4R d-none d-md-block",
                      children: "Experience",
                    }),
                    (0, t.jsx)(F.Z, {
                      width: 14,
                      height: 14,
                      className: "d-block d-md-none",
                    }),
                    (0, t.jsx)(m.o0, {
                      color: a.Z.colors.theme_secondary[200],
                      dfontWeight: 500,
                      mfontWeight: 500,
                      className: "Body4R",
                      children:
                        null === (f = n.becomeDistributorData) || void 0 === f
                          ? void 0
                          : f.experience,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mb-2 pb-1 ",
                  children: [
                    (0, t.jsx)(m.o0, {
                      color: a.Z.colors.theme_secondary[100],
                      className: "Body4R line-brk ",
                      children:
                        null === (g = n.becomeDistributorData) || void 0 === g
                          ? void 0
                          : g.business_profile,
                    }),
                    (0, t.jsx)("div", {
                      className: "send-btn mt-3",
                      onClick: () => {
                        k(""), w(!0), y({ type: "@POPUP_ACTIVE" });
                      },
                      children: (0, t.jsxs)(l.WC, {
                        className: "d-flex align-items-center",
                        children: [
                          (0, t.jsx)(m.ao, {
                            className: "Body3R mr-1",
                            dfontWeight: 500,
                            mfontWeight: 500,
                            children: "Send Proposal",
                          }),
                          " ",
                          (0, t.jsx)(p.Z, { width: 18, height: 18 }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)(K.Z, {
                  dType: "Popup",
                  mType: "Popup",
                  setPopup: w,
                  popup: v,
                  sendProposalForm: !0,
                  bgClose: !0,
                  children: (0, t.jsx)(G.Z, { errorpopup: j }),
                }),
              ],
            })
          );
        },
        Y = s.ZP.div.withConfig({ componentId: "sc-5bfbe2d4-0" })(
          q(),
          a.Z.colors.theme_primary.main,
          a.Z.colors.theme_primary.main
        );
      var J = i(9008),
        Q = i.n(J);
      function nn() {
        let n = (0, r.Z)([
          '\n  .event-img {\n    margin-left: -10px;\n  }\n  .event-title {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 24px;\n    color: #323a43;\n  }\n  .event-link {\n    color: #323a43;\n    cursor: pointer;\n    text-decoration: underline;\n  }\n  .right-align {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n  .align-end {\n    text-align: end;\n  }\n',
        ]);
        return (
          (nn = function () {
            return n;
          }),
          n
        );
      }
      let ne = [
          {
            id: 1,
            brand_image: "/images/dummy/sub-head/ananda.png",
            distributor_image: "/images/dummy/sub-head/distributor-1.png",
          },
          {
            id: 2,
            brand_image: "/images/dummy/sub-head/gomechanic.png",
            distributor_image: "/images/dummy/sub-head/distributor-2.png",
          },
          {
            id: 3,
            brand_image: "/images/dummy/sub-head/asian-paints.png",
            distributor_image: "/images/dummy/sub-head/distributor-3.png",
          },
          {
            id: 4,
            brand_image: "/images/dummy/sub-head/summer-cool.png",
            distributor_image: "/images/dummy/sub-head/distributor-4.png",
          },
          {
            id: 5,
            brand_image: "/images/dummy/sub-head/supreme.png",
            distributor_image: "/images/dummy/sub-head/distributor-5.png",
          },
          {
            id: 6,
            brand_image: "/images/dummy/sub-head/gulf.png",
            distributor_image: "/images/dummy/sub-head/distributor-6.png",
          },
        ],
        ni = (n) =>
          (0, t.jsx)(nt, {
            children: (0, t.jsxs)("div", {
              className: n.distributorships ? "right-align" : "",
              children: [
                (0, t.jsx)("div", {
                  className: "mb-3",
                  children: ne.map((e, i) =>
                    (0, t.jsx)(
                      c(),
                      {
                        src: n.distributorships
                          ? e.distributor_image
                          : e.brand_image,
                        alt: "event-1",
                        width: 48,
                        height: 48,
                        className: 0 !== i ? "event-img" : "",
                      },
                      i
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className: n.distributorships
                    ? "event-title align-end"
                    : "event-title",
                  children: n.distributorships
                    ? "Recently Added Distributorships"
                    : "Exclusive Brands",
                }),
                (0, t.jsx)(m.$X, {
                  className: n.distributorships
                    ? "align-end Body4R mb-3"
                    : "Body4R mb-3",
                  color: a.Z.colors.theme_secondary[100],
                  children: n.distributorships
                    ? "Discover new avenues and grab exciting opportunities."
                    : "Top Industry Players Trust GetDistributors for their Business Success!",
                }),
                n.distributorships
                  ? (0, t.jsx)("div", {
                      className: "event-link",
                      onClick: n.radOnclick,
                      children: (0, t.jsxs)(m.$X, {
                        className: "Body4R",
                        color: a.Z.colors.theme_secondary[200],
                        mfontWeight: 700,
                        dfontWeight: 700,
                        children: [" ", "VIEW ALL"],
                      }),
                    })
                  : (0, t.jsx)("div", {
                      className: "event-link",
                      onClick: n.ebOnclick,
                      children: (0, t.jsxs)(m.$X, {
                        className: "Body4R",
                        color: a.Z.colors.theme_secondary[200],
                        mfontWeight: 700,
                        dfontWeight: 700,
                        children: [" ", "VIEW ALL"],
                      }),
                    }),
              ],
            }),
          }),
        nt = s.ZP.div.withConfig({ componentId: "sc-a804f0b5-0" })(nn());
      var no = i(5697),
        nr = i.n(no);
      function ns() {
        return (ns =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (n[t] = i[t]);
            }
            return n;
          }).apply(this, arguments);
      }
      var na = (0, o.forwardRef)(function (n, e) {
        var i = n.color,
          t = n.size,
          r = void 0 === t ? 24 : t,
          s = (function (n, e) {
            if (null == n) return {};
            var i,
              t,
              o = (function (n, e) {
                if (null == n) return {};
                var i,
                  t,
                  o = {},
                  r = Object.keys(n);
                for (t = 0; t < r.length; t++)
                  (i = r[t]), e.indexOf(i) >= 0 || (o[i] = n[i]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              for (t = 0; t < r.length; t++)
                (i = r[t]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(n, i) &&
                    (o[i] = n[i]);
            }
            return o;
          })(n, ["color", "size"]);
        return o.createElement(
          "svg",
          ns(
            {
              ref: e,
              xmlns: "http://www.w3.org/2000/svg",
              width: r,
              height: r,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === i ? "currentColor" : i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          o.createElement("line", { x1: "21", y1: "10", x2: "3", y2: "10" }),
          o.createElement("line", { x1: "21", y1: "6", x2: "3", y2: "6" }),
          o.createElement("line", { x1: "21", y1: "14", x2: "3", y2: "14" }),
          o.createElement("line", { x1: "21", y1: "18", x2: "3", y2: "18" })
        );
      });
      (na.propTypes = {
        color: nr().string,
        size: nr().oneOfType([nr().string, nr().number]),
      }),
        (na.displayName = "AlignJustify");
      var nl = i(2802);
      function nd() {
        let n = (0, r.Z)([
          "\n      .popupClose {\n        right: 1rem;\n        top: 1rem;\n      }\n      .popupWrap {\n        animation: popup 0.4s forwards;\n        top: 35px;\n        width: calc(100% - 70px);\n        /* height: calc(100vh - 70px); */\n        max-height: 650px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        border-radius: 0;\n      }\n      @keyframes popup {\n        from {\n          opacity: 0;\n          top: 0;\n        }\n\n        to {\n          opacity: 1;\n          top: 35px;\n        }\n      }\n    ",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, r.Z)([
          "\n      .popupClose {\n        right: 1rem;\n        top: -14px;\n      }\n      .popupWrap {\n        animation: BottomSheet 0.4s forwards;\n        top: auto;\n        width: 100%;\n        left: 0;\n        transform: translate(0, 0);\n        /* height: calc(100vh - 120px); */\n        /* height: calc(100vh - 80px); */\n        border-radius: 24px 24px 0px 0px;\n      }\n      @keyframes BottomSheet {\n        from {\n          opacity: 0;\n          bottom: -35px;\n        }\n\n        to {\n          opacity: 1;\n          bottom: 0;\n        }\n      }\n    ",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, r.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 480px;\n          min-height: 330px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, r.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: 1rem;\n        }\n        .popupWrap {\n          animation: popup 0.4s forwards;\n          top: 35px;\n          left: 50%;\n          transform: translate(-50%, 0);\n          border-radius: 24px;\n          width: 300px;\n          min-height: 150px !important;\n          /* height: 500px; */\n          overflow: hidden;\n        }\n        @keyframes popup {\n          from {\n            opacity: 0;\n            top: 0;\n          }\n\n          to {\n            opacity: 1;\n            top: 35px;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      function nh() {
        let n = (0, r.Z)([
          "\n      @media screen and (min-width: 992px) {\n        .popupClose {\n          right: 1rem;\n          top: -14px;\n        }\n        .popupWrap {\n          animation: BottomSheet 0.4s forwards;\n          top: auto;\n          width: 100%;\n          left: 0;\n          transform: translate(0, 0);\n          height: calc(100vh - 120px);\n          border-radius: 24px 24px 0px 0px;\n        }\n        @keyframes BottomSheet {\n          from {\n            opacity: 0;\n            bottom: -35px;\n          }\n\n          to {\n            opacity: 1;\n            bottom: 0;\n          }\n        }\n      }\n    ",
        ]);
        return (
          (nh = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, r.Z)([
          "\n  position: absolute;\n  z-index: 17;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  .popBg {\n    background-color: rgba(0, 0, 0, 0.7);\n    cursor: pointer;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n  .popupClose {\n    background-color: #fff;\n    /* border-radius: 50%; */\n    /* background-color: #fbf6f1; */\n    background-color: ",
          ";\n    height: 32px;\n    position: absolute;\n    right: 1rem;\n    top: -14px;\n    width: 32px;\n    z-index: 2;\n    border: none;\n    cursor: pointer;\n  }\n  .popupWrap {\n    /* background-color: #fff; */\n    background-color: ",
          ";\n    position: fixed;\n    top: 20% !important;\n    z-index: 4;\n    border-radius: 20px !important;\n    overflow: hidden;\n    height: ",
          ";\n  }\n  div.popupWrap.smallpopup {\n    width: 92%;\n    height: auto;\n    padding: 20px;\n  }\n  div.popupWrap.smallpopup .popupClose {\n    right: 1rem;\n    top: -1rem;\n  }\n  div.popupWrap.smallMidpopup {\n    width: 92%;\n    height: auto;\n    padding: 20px;\n  }\n  div.popupWrap.smallMidpopup .popupClose {\n    right: 1rem;\n    top: -1rem;\n  }\n  @media screen and (min-width: 767px) {\n    div.popupWrap.smallpopup {\n      width: 480px;\n      height: auto;\n      padding: 20px;\n    }\n    div.popupWrap.smallpopup .popupClose {\n      right: -0.5rem;\n      top: -0.5rem;\n    }\n    div.popupWrap.smallMidpopup {\n      width: 625px;\n      height: auto;\n      padding: 30px 40px;\n    }\n    div.popupWrap.smallMidpopup .popupClose {\n      right: -0.5rem;\n      top: -0.5rem;\n    }\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      let nu = (n) => {
          let {
              children: e,
              dType: i,
              mType: o,
              setPopup: r,
              popup: s,
              bgClose: a,
              customClass: l,
              catPopup: d,
            } = n,
            p = (0, V.I0)(),
            m = () => {
              setTimeout(() => {
                p({ type: "@POPUP_DEACTIVE" });
              }, 1e3);
            },
            h = () => {
              r(!1);
            },
            x = () => {
              a && (r(!1), m());
            };
          return (0, t.jsx)(t.Fragment, {
            children:
              s &&
              (0, t.jsxs)(nb, {
                dType: i,
                mType: o,
                catPopup: d,
                sendProposalForm: n.sendProposalForm,
                loggedInPopup: n.loggedInPopup,
                onClick: () => {
                  h(), n.secondAtt && n.secondAtt(), m();
                },
                children: [
                  (0, t.jsxs)("div", {
                    className: l ? "popupWrap " + l : "popupWrap",
                    children: [
                      (0, t.jsx)("button", {
                        onClick: () => {
                          h(), n.secondAtt && n.secondAtt(), m();
                        },
                        className: "p-1 popupClose",
                        children: (0, t.jsx)(c(), {
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
                  (0, t.jsx)("div", {
                    className: "popBg",
                    onClick: x,
                    children: "\xa0",
                  }),
                ],
              }),
          });
        },
        nb = s.ZP.div.withConfig({ componentId: "sc-e3d84505-0" })(
          nx(),
          (n) => (n.catPopup ? "#fbf6f1" : "#fff"),
          (n) => (n.catPopup ? "transparent" : "#fff"),
          (n) => (n.sendProposalForm ? "500px" : "auto"),
          (n) => "Popup" === n.mType && (0, s.iv)(nd()),
          (n) => "BottomSheet" === n.mType && (0, s.iv)(nc()),
          (n) => "Popup" === n.dType && (0, s.iv)(np()),
          (n) => "Popup" === n.dType && n.loggedInPopup && (0, s.iv)(nm()),
          (n) => "BottomSheet" === n.dType && (0, s.iv)(nh())
        );
      var nf = i(1120),
        ng = i(628);
      function nv() {
        let n = (0, r.Z)([
          '\n  background: #fbf6f1;\n  border: 1px solid #e07f23;\n  border-radius: 32px;\n  padding: 18px 21px 26px 30px;\n  .cat-listing {\n    max-height: 400px;\n    overflow-y: auto;\n  }\n  .cat-heading {\n    font-family: "Poppins";\n    font-style: normal;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 24px;\n    color: #000000;\n  }\n  .cat-link {\n    text-decoration: none;\n  }\n  .txt-style {\n    text-transform: capitalize;\n  }\n',
        ]);
        return (
          (nv = function () {
            return n;
          }),
          n
        );
      }
      let nw = (n) => {
          var e, i;
          return (0, t.jsxs)(nj, {
            children: [
              (0, t.jsx)("div", {
                className: "cat-heading mb-3",
                children: "CATEGORIES",
              }),
              (0, t.jsx)("div", {
                className: "cat-listing",
                children:
                  (null === (e = n.homeCategoryListdata) || void 0 === e
                    ? void 0
                    : e.length) > 0 &&
                  (null === (i = n.homeCategoryListdata) || void 0 === i
                    ? void 0
                    : i.map((n, e) =>
                        (0, t.jsxs)(
                          h.Z,
                          {
                            href: (0, x.K)().DOMAIN_URI + n.cat_url,
                            className:
                              "cat-link d-flex align-items-center justify-content-between mb-3",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "d-flex ",
                                children: [
                                  n.category_icon_url &&
                                    (0, t.jsx)(c(), {
                                      src: n.category_icon_url,
                                      alt: n.category_name,
                                      width: 18,
                                      height: 18,
                                    }),
                                  (0, t.jsx)(m.o0, {
                                    className: "Body4R ml-2 txt-style",
                                    mfontWeight: 500,
                                    dfontWeight: 500,
                                    color: a.Z.colors.theme_secondary[200],
                                    children: n.category_name,
                                  }),
                                ],
                              }),
                              (0, t.jsx)(ng.Z, {
                                width: 18,
                                height: 18,
                                color: a.Z.colors.theme_secondary[200],
                              }),
                            ],
                          },
                          e
                        )
                      )),
              }),
            ],
          });
        },
        nj = s.ZP.div.withConfig({ componentId: "sc-65b5d4ed-0" })(nv());
      function nk() {
        let n = (0, r.Z)([
          '\n  position: relative;\n  font-family: "Urbanist";\n  .home-arrow {\n    position: absolute;\n    display: none;\n  }\n\n  .pyr-button button {\n    background: #3d348b;\n    border-radius: 36px;\n    color: #fff;\n    padding: 16px 40px;\n  }\n  .sub-head-title {\n    font-style: normal;\n    font-weight: 700;\n    font-size: 50px;\n    line-height: 65px;\n    text-align: center;\n    color: #323a43;\n  }\n  .gd-poster {\n    background: #fbf6f1;\n    border: 1px solid #eeddcd;\n    border-radius: 32px;\n    padding: 22px 26px 22px 26px;\n    /* width: 282px; */\n  }\n  .post-title span:first-child {\n    color: #68778d;\n  }\n  .link-normal {\n    text-decoration: none;\n  }\n  .post-title span:last-child {\n    color: #323a43;\n  }\n  .post-content {\n    margin-bottom: 24px;\n    margin-top: -12px;\n  }\n  .subhead-events {\n    margin-bottom: 70px;\n  }\n  .sub-head-center {\n    display: flex;\n    justify-content: space-between;\n  }\n  .bg-one {\n    background-image: url(/images/dummy/sub-head/not-checked.png);\n    background-repeat: no-repeat;\n    background-position: 8px 4px;\n    width: 238px;\n    height: 34px;\n    padding: 6px 0 6px 6px;\n    color: #68778d;\n    padding-left: 42px;\n    margin-bottom: 12px;\n    cursor: pointer;\n  }\n  .bg-one.bg-two {\n    background-image: url(/images/dummy/sub-head/checked.png);\n    color: #323a43;\n    border: 1px solid #68778d;\n    border-radius: 100px;\n    background-color: #fff;\n    font-weight: 500;\n  }\n  .event-btn button {\n    background: #f35b04;\n    border-radius: 36px;\n    padding: 16px 20px;\n    color: #fff;\n    width: 100%;\n    font-family: "Ubuntu";\n  }\n  .events-distributorship {\n    margin-top: 100px;\n  }\n  .left,\n  .right {\n    width: 286px;\n  }\n  .all-cat {\n    background: #f35b04;\n    border-radius: 88px;\n    padding: 25px;\n    align-items: center;\n    display: flex;\n    justify-content:space-between;\n    color: #fff;\n    cursor: pointer;\n  }\n  .mg-left {\n    margin-left: 74px;\n  }\n  .distributors-count {\n    position: absolute;\n    bottom: -8px;\n    left: 100px;\n    background: #e2e8f0;\n    border: 1px solid #a9b9cc;\n    border-radius: 88px;\n    padding: 4px 8px;\n    color: #323a43;\n    font-size: 10px;\n  }\n  .bold-txt {\n    font-weight: 600;\n  }\n  @media (min-width: 768px) {\n    .all-cat {\n      background: #f35b04;\n      border-radius: 88px;\n      padding: 20px;\n      align-items: center;\n      display: inline-flex;\n      color: #fff;\n      position: absolute;\n      left: 50%;\n      margin-left:-141px;\n      bottom: -6px;\n    }\n    .home-arrow {\n      position: absolute;\n      display: block;\n    }\n    .left-a {\n      left: 0px;\n      bottom: -100px;\n    }\n    .right-a {\n      right: 0px;\n      top: 380px;\n    }\n    .distributors-count {\n      bottom: -8px;\n      left: 74px;\n    }\n  }\n',
        ]);
        return (
          (nk = function () {
            return n;
          }),
          n
        );
      }
      let ny = (n) => {
          let [e, i] = (0, o.useState)(!0),
            [r, s] = (0, o.useState)(!1),
            d = () => {
              i(!0), s(!1);
            },
            p = () => {
              s(!0), i(!1);
            },
            [u, b] = (0, o.useState)(!1),
            [f, g] = (0, o.useState)(!1);
          return (0, t.jsxs)(nN, {
            children: [
              (0, t.jsxs)("div", {
                className: "sub-head-cont d-none d-md-block",
                children: [
                  (0, t.jsxs)("div", {
                    className: "sub-head-title",
                    children: [
                      "The Launchpad for Your Business Expansion",
                      (0, t.jsx)("br", {}),
                      " and Entrepreneurial Success!",
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "sub-head-center",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "left",
                        children: [
                          (0, t.jsx)("div", {
                            className: "subhead-events",
                            children: (0, t.jsx)(ni, {
                              ebOnclick: n.ebOnclick,
                              radOnclick: n.radOnclick,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "gd-poster",
                            children: [
                              (0, t.jsx)(c(), {
                                src: "/images/dummy/sub-head/post-your-requirement.png",
                                alt: "post your requirement",
                                width: 100,
                                height: 100,
                              }),
                              (0, t.jsx)("div", {
                                className: "post-content",
                                children: (0, t.jsxs)(m.ks, {
                                  className: "Body1R post-title",
                                  mfontWeight: 600,
                                  dfontWeight: 600,
                                  children: [
                                    (0, t.jsx)("span", {
                                      children:
                                        "Supercharge Your Business Growth:",
                                    }),
                                    " ",
                                    (0, t.jsx)("span", {
                                      children:
                                        "Unlock Limitless Opportunities!",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "pyr-button",
                                onClick: n.pyrOnclick,
                                children: (0, t.jsxs)(l.WC, {
                                  children: [
                                    (0, t.jsx)(m.o0, {
                                      className: "Body4R",
                                      dfontWeight: 500,
                                      mfontWeight: 500,
                                      children: "Post Your Requirement",
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "middle",
                        children: (0, t.jsx)(c(), {
                          src: "/images/banner/home-banner-img.png",
                          width: 500,
                          height: 562,
                          alt: "get distributors",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "right",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "gd-poster",
                            children: [
                              (0, t.jsx)(m.ks, {
                                className: "Body2R post-title",
                                mfontWeight: 600,
                                dfontWeight: 600,
                                children: "What are you looking for?",
                              }),
                              (0, t.jsx)(m.GV, {
                                className: "Body4R mb-2 pb-1",
                                color: a.Z.colors.theme_secondary[100],
                                children: "Explore Opportunities!",
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)(m.GV, {
                                    className: "".concat(
                                      e ? "bg-two" : "",
                                      " Body4R bg-one"
                                    ),
                                    color: a.Z.colors.theme_secondary[100],
                                    onClick: d,
                                    children: "Distributor",
                                  }),
                                  (0, t.jsx)(m.GV, {
                                    className: "".concat(
                                      r ? "bg-two" : "",
                                      " Body4R bg-one"
                                    ),
                                    color: a.Z.colors.theme_secondary[100],
                                    onClick: p,
                                    children: "Franchise",
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: "event-btn mt-2 pt-1 anchor-cont",
                                children: (0, t.jsx)(h.Z, {
                                  href: e
                                    ? (0, x.K)().DOMAIN_URI + "/distributors"
                                    : (0, x.K)().DOMAIN_URI + "/franchises",
                                  className: "link-normal",
                                  children: (0, t.jsxs)(l.WC, {
                                    children: [
                                      (0, t.jsxs)(m.o0, {
                                        className: "Body4R",
                                        dfontWeight: 500,
                                        mfontWeight: 500,
                                        children: [
                                          "Looking for ",
                                          e ? "Distributor" : "Franchise",
                                        ],
                                      }),
                                      " ",
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "events-distributorship",
                            children: (0, t.jsx)(ni, {
                              distributorships: !0,
                              ebOnclick: n.ebOnclick,
                              radOnclick: n.radOnclick,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "all-cat",
                onClick: () => g(!0),
                children: [
                  (0, t.jsxs)("div", {
                    className: "d-flex",
                    children: [
                      (0, t.jsx)(na, {
                        width: 18,
                        height: 18,
                        className: "mr-3",
                      }),
                      (0, t.jsx)(m.GV, {
                        mfontWeight: 500,
                        dfontWeight: 500,
                        className: "Body4R",
                        children: "ALL CATEGORIES",
                      }),
                    ],
                  }),
                  (0, t.jsx)(nl.Z, {
                    width: 24,
                    height: 24,
                    className: "mg-left",
                  }),
                  (0, t.jsxs)("div", {
                    className: "distributors-count",
                    children: [
                      (0, t.jsx)("span", {
                        className: "mr-1",
                        children: "Total",
                      }),
                      (0, t.jsx)("span", {
                        className: "mr-1 bold-txt",
                        children: "1.2 Lakh",
                      }),
                      (0, t.jsx)("span", { children: "Distributors" }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(nu, {
                dType: "Popup",
                mType: "Popup",
                setPopup: b,
                popup: u,
                bgClose: !0,
                children: (0, t.jsx)(nf.Z, { withPopup: !0 }),
              }),
              (0, t.jsx)(nu, {
                dType: "Popup",
                mType: "Popup",
                setPopup: g,
                popup: f,
                catPopup: !0,
                bgClose: !0,
                children: (0, t.jsx)(nw, {
                  homeCategoryListdata: n.homeCategoryListdata,
                }),
              }),
            ],
          });
        },
        nN = s.ZP.div.withConfig({ componentId: "sc-203d32d7-0" })(nk());
      var n_ = i(4474),
        nZ = i(1447);
      function nD() {
        let n = (0, r.Z)([
          '\n  /* .sub-head-banner {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 900;\n    font-size: 42px;\n    line-height: 50px;\n    color: #fff;\n    position: absolute;\n    top: 28px;\n    left: 44px;\n    z-index: 1;\n  }  */\n  div.slick-slide {\n    width: calc(100vw - 34px);\n  }\n  button.slick-next,\n  button.slick-prev {\n    background-color: transparent;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: solid 1px #fff;\n    z-index: 2;\n    top: 60px;\n  }\n  button.slick-prev {\n    padding: 0 0 0 4px;\n    /* left: calc(100% - 5rem);\n    top: -3rem; */\n    left: 24px;\n    top: 124px;\n  }\n  button.slick-next {\n    padding: 0 4px 0 0;\n    /* right: 0;\n    top: -3rem; */\n    left: 76px;\n    top: 124px;\n  }\n\n  div.slick-slide > div {\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n  .slick-list {\n    margin: 0px 0px 0px 0px;\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n  button.slick-prev:before,\n  button.slick-next:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 8px;\n    height: 8px;\n    border-right: solid 1px #fff;\n    border-top: solid 1px #fff;\n    transform: rotate(-135deg);\n  }\n  button.slick-next:before {\n    transform: rotate(45deg);\n  }\n  button.slick-next:hover,\n  button.slick-prev:hover {\n    background-color: transparent;\n  }\n  button.slick-prev:hover:before,\n  button.slick-next:hover:before {\n    border-color: #fff;\n  }\n  /* .slick-arrow {\n    display: none !important;\n  } */\n  .slick-slider:hover .slick-arrow {\n    display: block !important;\n  }\n  .heading {\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    color: #323a43;\n    font-family: "Urbanist";\n  }\n  @media screen and (min-width: 576px) {\n    button.slick-prev {\n      padding: 0 0 0 4px;\n      /* left: calc(100% - 5rem);\n    top: -3rem; */\n      left:50px;\n      top: 200px;\n    }\n    button.slick-next {\n      padding: 0 4px 0 0;\n      /* right: 0;\n    top: -3rem; */\n      left: 96px;\n      top: 200px;\n    }\n    .heading {\n      font-size: 32px;\n      line-height: 24px;\n    }\n    div.slick-slide {\n      width: inherit;\n    }\n    button.slick-arrow.slick-prev.slick-disabled,\n    button.slick-arrow.slick-next.slick-disabled {\n      border-color: #fff;\n    }\n    .slick-prev.slick-disabled:hover,\n    .slick-next.slick-disabled:hover {\n      background-color: transparent;\n    }\n    .slick-prev.slick-disabled:hover:before,\n    .slick-next.slick-disabled:hover:before {\n      border-color: #f35b04;\n    }\n  }\n',
        ]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      let nI = (n) => {
          let { className: e, children: i } = n;
          return (0, t.jsx)(v.X, {
            children: (0, t.jsxs)(nW, {
              className: e,
              children: [
                (0, t.jsx)("div", { className: "mb-4", ref: n.refProp }),
                (0, t.jsx)(g.Z, {
                  dots: !1,
                  infinite: !0,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !1,
                  autoplay: !0,
                  autoplaySpeed: 6e3,
                  pauseOnHover: !1,
                  responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                      },
                    },
                    {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        variableWidth: !0,
                      },
                    },
                  ],
                  children: i,
                }),
              ],
            }),
          });
        },
        nW = s.ZP.div.withConfig({ componentId: "sc-a44361bd-0" })(nD());
      var nC = i(9404),
        nR = i(8416);
      function nB() {
        let n = (0, r.Z)([
          '\n  /* card -css */\n  font-family: "Roboto", sans-serif;\n  .servBox {\n    box-shadow: 0px 2px 30px 9px rgba(109, 103, 89, 0.0574191);\n    border-radius: 8px;\n    padding: 1rem 0 40px 1rem;\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n  .trustCardWr {\n    box-sizing: border-box;\n    width: 208px;\n    height: 240px;\n    border-radius: 16px;\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    -webkit-transform: scale(0.98);\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n    -webkit-transition: ease-out 0.2s;\n    transition: ease-out 0.2s;\n  }\n  .card-text {\n    position: absolute;\n    bottom: 26px;\n    left: 20px;\n    overflow: hidden;\n    white-space: normal;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    color: #fff;\n    line-height: 18px;\n    font-weight: 500;\n    font-size: 14px;\n    width: calc(100% - 40px);\n    z-index: 1;\n    letter-spacing: 0.525px;\n    /* margin: 0px 10px  0 10px; */\n    /* padding: 0 0.5rem; */\n  }\n  .ti-text {\n    position: absolute;\n    left: 20px;\n    bottom: 4px;\n    font-size: 12px;\n    color: #eef0f3;\n    letter-spacing: 0.525px;\n  }\n  .no-decoration {\n    text-decoration: none;\n  }\n  .trustLink {\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center; */\n    height: 100%;\n    display: block;\n  }\n  .view-anchor {\n    color: #e1771a;\n  }\n  .servHeading {\n    color: #082f4a;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 24px;\n    letter-spacing: 0.625px;\n    margin: 0;\n  }\n  .servSubHead {\n    color: #082f4a;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n  }\n  /* .trustCardWr {\n    display: block;\n    white-space: nowrap;\n  } */\n  .trstImg {\n    position: relative;\n    height: 100%;\n  }\n  .trstImg img {\n    border-radius: 14px;\n    height: 240px;\n    object-fit: cover;\n    width: 100%;\n    filter: brightness(70%);\n  }\n  .proInfo {\n    padding-top: 12px;\n    border-top: solid 1px #e1e6ef;\n    margin-top: 0px;\n    position: relative;\n    margin-top: 20px;\n  }\n\n  .trustSrvDet {\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis;\n    color: #2d3840;\n    line-height: 18px;\n  }\n  .trustLink {\n    /* box-shadow: 3px 31px 40px -42px #bbc2cd;\n    border: 1px solid #e1e6ef; */\n    -o-border-radius: 8px;\n    -ms-border-radius: 8px;\n    -moz-border-radius: 8px;\n    -webkit-border-radius: 8px;\n    border-radius: 8px;\n    text-decoration: none;\n    color: #082f4a;\n\n    width: inherit;\n    margin-right: 1rem;\n  }\n  .trustLink:last-child {\n    margin: 0;\n  }\n  .trustSrvDet {\n    line-height: 18px;\n    font-weight: 500;\n    font-size: 12px;\n    padding: 0 0.5rem;\n    height: 50px;\n    white-space: break-spaces;\n  }\n  .trustPrice {\n    color: #265c81;\n    font-size: 14px;\n    font-weight: 500;\n  }\n  .moq {\n    color: #000;\n    font-size: 12px;\n    font-weight: 400;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis;\n  }\n  .rating {\n    background-image: url("/images/icons/star-icon.svg");\n    background-repeat: no-repeat;\n    background-position: 95% center;\n    background-color: rgba(8, 47, 74, 0.5);\n    border-radius: 2px;\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 15px;\n    color: #fff;\n    position: absolute;\n    padding: 0 16px 0 4px;\n    right: 4px;\n    bottom: 14px;\n  }\n  @media (min-width: 768px) {\n    /* .trustCardWr {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 1rem;\n      overflow-x: visible;\n      white-space: normal;\n    } */\n    .wbs-image {\n      width: 100%;\n      height: 240px;\n    }\n  }\n\n  .slick-slide {\n    width: 62vw;\n  }\n  button.slick-arrow.slick-prev.slick-disabled {\n    display: none !important;\n  }\n  button.slick-arrow.slick-next.slick-disabled {\n    display: none !important;\n  }\n  .slick-next,\n  .slick-prev {\n    background-color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: solid 1px #265c81;\n    z-index: 2;\n    top: 60px;\n  }\n  .slick-prev {\n    left: -1rem;\n    top: 12rem;\n    padding: 0 0 0 4px;\n  }\n  .slick-next {\n    right: 0px;\n    padding: 0 4px 0 0;\n    top: 12rem;\n  }\n\n  .slick-slide > div {\n    margin-right: 20px;\n  }\n\n  /* .slick-list {\n    margin: 0px -10px 0px -10px;\n  } */\n  .slick-prev:before,\n  .slick-next:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 8px;\n    height: 8px;\n    border-right: solid 1px #265c81;\n    border-top: solid 1px #265c81;\n    transform: rotate(-135deg);\n  }\n  .slick-next:before {\n    transform: rotate(45deg);\n  }\n  .slick-next:hover,\n  .slick-prev:hover {\n    background-color: #265c81;\n  }\n  .slick-prev:hover:before,\n  .slick-next:hover:before {\n    border-color: #fff;\n  }\n\n  @media screen and (min-width: 1025px) {\n    &:hover .slick-prev,\n    &:hover .slick-next {\n      display: block !important;\n    }\n    .moq {\n      color: #000;\n      font-size: 12px;\n      font-weight: 400;\n      white-space: normal;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    .slick-slide {\n      width: inherit;\n    }\n    .trstImg img {\n      border-radius: 14px;\n      height: 370px;\n      /* height: 124px; */\n      object-fit: cover;\n    }\n    .trustCardWr {\n      height: 370px;\n    }\n  }\n',
        ]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      let nP = {
          dots: !1,
          infinite: !1,
          speed: 300,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: !0,
          autoplay: !1,
          autoplaySpeed: 5e3,
          pauseOnHover: !1,
          responsive: [
            {
              breakpoint: 768,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
              breakpoint: 576,
              settings: {
                autoplay: !0,
                autoplaySpeed: 5e3,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !1,
                variableWidth: !0,
                arrows: !1,
              },
            },
          ],
        },
        nO = (n) => {
          var e;
          let { heading: i, content: o } = n,
            r =
              n &&
              n.web_stories_data &&
              (null === (e = n.web_stories_data) || void 0 === e
                ? void 0
                : e.sort((n, e) =>
                    Number(n.position) > Number(e.position)
                      ? 1
                      : Number(n.position) < Number(e.position)
                      ? -1
                      : 0
                  ));
          return (0, t.jsx)(v.X, {
            children: (0, t.jsx)(nS, {
              children: (0, t.jsxs)("div", {
                className: "servBox",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "d-flex justify-content-between align-items-center mb-3 ",
                    children: (0, t.jsx)(m.vW, {
                      className: "servHeading Title2",
                      children: i || "TradeIndia Trusted",
                    }),
                  }),
                  (0, t.jsx)(g.Z, {
                    ...nP,
                    children:
                      null == r
                        ? void 0
                        : r.map((n, e) =>
                            (0, t.jsx)(
                              "div",
                              {
                                className: "trustCardWr",
                                children: (0, t.jsx)("a", {
                                  href: null == n ? void 0 : n.url,
                                  className: "no-decoration",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: (0, t.jsx)("span", {
                                    className: "trustLink pb-3 pb-md-2",
                                    children: (0, t.jsxs)("div", {
                                      className: "trstImg",
                                      children: [
                                        n.img_url
                                          ? (0, t.jsx)("img", {
                                              alt: n.title,
                                              src: n.img_url,
                                              className: "wbs-image",
                                            })
                                          : (0, t.jsx)("div", {
                                              className: "noImage",
                                              children: (0, t.jsx)(nR.Z, {}),
                                            }),
                                        (0, t.jsx)("p", {
                                          className: "card-text",
                                          children:
                                            null == n ? void 0 : n.title,
                                        }),
                                        (0, t.jsx)("span", {
                                          className: "ti-text",
                                          children: "By GetDistributors",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              },
                              "trust-card" + e
                            )
                          ),
                  }),
                ],
              }),
            }),
          });
        },
        nS = s.ZP.div.withConfig({ componentId: "sc-21fb231-0" })(nB());
      function nT() {
        let n = (0, r.Z)([
          '\n  .blog-heading {\n    font-family: "Urbanist";\n    font-size: 22px;\n    font-weight: 600;\n    color: #323a43;\n    line-height: 24px;\n  }\n  .blog-v-lnk {\n    text-decoration: none;\n    background: #f35b04;\n    border: 1px solid #d76a03;\n    border-radius: 36px;\n    padding: 11px 14px 11px 30px;\n    color: #fff;\n  }\n  .blog-v-lnk.full-w-link {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    margin-top: 20px;\n  }\n  .Blog-row {\n    display: inline-flex;\n    white-space: nowrap;\n    overflow-x: auto;\n    width: 100%;\n  }\n  .exclusive-brands-heading,\n  .bd-title {\n    font-family: "Urbanist";\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    margin-bottom: 12px;\n    color: #323a43;\n  }\n  .exclusive-br-cnt {\n    background: #f1f4f9;\n    padding: 22px 0;\n  }\n  .overflow-cont {\n    display: flex;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  .ebrand-cont {\n    width: auto;\n    margin-right: 12px;\n    flex: 0 0 296px;\n  }\n  .col-md-3.custom-margin:nth-child(odd) {\n    padding-right: 6px;\n  }\n  .col-md-3.custom-margin:nth-child(even) {\n    padding-left: 6px;\n  }\n  .home-header {\n    background: linear-gradient(\n      133.48deg,\n      #fdf3ea 2.02%,\n      rgba(255, 255, 255, 0) 79.57%\n    );\n  }\n  .banner-slider {\n    position: relative;\n  }\n  .bn-img {\n    width: 100%;\n    height: 176px;\n    border-radius: 16px;\n  }\n  /* .sub-head-banner {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 900;\n    font-size: 18px;\n    line-height: 24px;\n    color: #fff;\n    position: absolute;\n    top: 28px;\n    left: 14px;\n    z-index: 1;\n  } */\n  .bd-view-all button {\n    color: #fff;\n    width: 100%;\n    border-radius: 36px;\n    height: 40px;\n    background: #f35b04;\n    margin-top: 32px;\n  }\n  .custom-margin-top {\n    margin-top: -20px;\n  }\n  @media (min-width: 768px) {\n    .blog-heading {\n      font-size: 32px;\n    }\n    .custom-margin-top {\n      margin-top: 0px;\n    }\n    .bd-title2 {\n      font-size: 32px;\n      line-height: 24px;\n      margin-bottom: 26px;\n    }\n    /* .sub-head-banner {\n      font-size: 42px;\n      line-height: 50px;\n      top: 28px;\n      left: 44px;\n    } */\n    .exclusive-brands-heading,\n    .bd-title {\n      font-size: 32px;\n      line-height: 24px;\n      margin-bottom: 26px;\n    }\n    .exclusive-br-cnt {\n      padding: 36px 0 36px 0;\n      margin-bottom: 56px;\n    }\n    .overflow-cont {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n    .ebrand-cont {\n      width: 24%;\n    }\n    .bn-img {\n      width: 100%;\n      height: 270px;\n    }\n    .bd-view-all button {\n      width: 152px;\n      height: 44px;\n      margin-top: 22px;\n    }\n  }\n',
        ]);
        return (
          (nT = function () {
            return n;
          }),
          n
        );
      }
      let nz = (n) => {
          var e, i, r, s, l, d, u, b, f, g, v, w, j, k, y, _;
          let Z = (0, o.useRef)(null),
            D = () => {
              var n;
              null === (n = Z.current) ||
                void 0 === n ||
                n.scrollIntoView({ behavior: "smooth" });
            },
            W = (0, o.useRef)(null),
            R = () => {
              var n;
              null === (n = W.current) ||
                void 0 === n ||
                n.scrollIntoView({ behavior: "smooth" });
            },
            B = (0, o.useRef)(null),
            O = () => {
              var n;
              null === (n = B.current) ||
                void 0 === n ||
                n.scrollIntoView({ behavior: "smooth" });
            },
            A = (0, o.useRef)(null),
            L = () => {
              var n;
              null === (n = A.current) ||
                void 0 === n ||
                n.scrollIntoView({ behavior: "smooth" });
            },
            [H, M] = (0, o.useState)(!1),
            F = (0, V.v9)((n) => n.tiPopup.popupState);
          return (
            (0, o.useEffect)(() => {
              setTimeout(() => {
                M(!0);
              }, 3e4);
            }, []),
            (0, t.jsxs)(nE, {
              children: [
                (0, t.jsxs)(Q(), {
                  children: [
                    (0, t.jsx)("title", {
                      children:
                        null === (e = n.homemetatags) || void 0 === e
                          ? void 0
                          : e.title,
                    }),
                    (0, t.jsx)("meta", {
                      name: "description",
                      content:
                        null === (i = n.homemetatags) || void 0 === i
                          ? void 0
                          : i.description,
                    }),
                    (0, t.jsx)("meta", {
                      name: "keywords",
                      content:
                        null === (r = n.homemetatags) || void 0 === r
                          ? void 0
                          : r.keywords,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "home-header",
                  children: [
                    (0, t.jsx)(n_.Z, {
                      homeHeader: !0,
                      userDetail_res: n.userDetail_res,
                      pyrOnclick: O,
                    }),
                    (0, t.jsx)("div", {
                      className: "ti-container bx-brd-box",
                      children: (0, t.jsxs)("div", {
                        className: "row flex-md-column-reverse n",
                        children: [
                          (0, t.jsx)("div", {
                            className: "col-12 mt-md-5 custom-margin-top",
                            children: (0, t.jsxs)(nI, {
                              children: [
                                (0, t.jsxs)("div", {
                                  className: "banner-slider",
                                  children: [
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/ujenia-enterprises-private-limited-216408/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/vidhyut.jpg",
                                        alt: "Get Distributer",
                                        className: "bn-img d-none d-md-block",
                                        width: 1192,
                                        height: 270,
                                      }),
                                    }),
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/ujenia-enterprises-private-limited-216408/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/vidhyut-insta.jpg",
                                        alt: "Get Distributer",
                                        className: "bn-img d-block d-md-none",
                                        width: 328,
                                        height: 270,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "banner-slider",
                                  children: [
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/ost-labz-private-limited-227557/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/ost-dlabs.gif",
                                        alt: "OST Labs",
                                        className: "bn-img d-none d-md-block",
                                        width: 1192,
                                        height: 270,
                                      }),
                                    }),
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/ost-labz-private-limited-227557/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/ost-mlabs.gif",
                                        alt: "OST Labs",
                                        className: "bn-img d-block d-md-none",
                                        width: 328,
                                        height: 270,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "banner-slider",
                                  children: [
                                    (0, t.jsx)("a", {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/sem/pages/maya_appliances.html",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/gd-banner-1.gif",
                                        alt: "Get Distributer",
                                        className: "bn-img d-none d-md-block",
                                        width: 1192,
                                        height: 270,
                                      }),
                                    }),
                                    (0, t.jsx)("a", {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/sem/pages/maya_appliances.html",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/gd-banner-m-1.gif",
                                        alt: "Get Distributer",
                                        className: "bn-img d-block d-md-none",
                                        width: 328,
                                        height: 270,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: "banner-slider",
                                  children: [
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/kabra-global-products-private-limited-167736/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/gd-banner-2.gif",
                                        alt: "Get Distributer",
                                        className: "bn-img d-none d-md-block",
                                        width: 1192,
                                        height: 270,
                                      }),
                                    }),
                                    (0, t.jsx)(h.Z, {
                                      href:
                                        (0, x.K)().DOMAIN_URI +
                                        "/distributors/kabra-global-products-private-limited-167736/",
                                      className: "link-normal",
                                      children: (0, t.jsx)(c(), {
                                        src: "/images/banner/gd-banner-m-2.gif",
                                        alt: "Get Distributer",
                                        className: "bn-img d-block d-md-none",
                                        width: 328,
                                        height: 270,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "col-12",
                            children: (0, t.jsx)(ny, {
                              homeCategoryListdata: n.homeCategoryListdata,
                              ebOnclick: D,
                              radOnclick: R,
                              pyrOnclick: O,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "ti-container bx-brd-box pt-4",
                  children: (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsxs)("div", {
                      className: "col-12",
                      children: [
                        (0, t.jsx)("div", {
                          ref: A,
                          children: (0, t.jsx)(I, {
                            homedistributorshipdata: n.homedistributorshipdata,
                            fatuteDistrubutorshipClick: L,
                          }),
                        }),
                        (0, t.jsx)("div", {
                          ref: W,
                          children: (0, t.jsx)(N, {
                            recentAddeddistibutordata:
                              n.recentAddeddistibutordata,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (null === (s = n.exclusivebranddata) || void 0 === s
                  ? void 0
                  : s.length) > 0 &&
                  (0, t.jsx)("div", {
                    className: "exclusive-br-cnt",
                    ref: Z,
                    children: (0, t.jsxs)("div", {
                      className: "ti-container bx-brd-box",
                      children: [
                        (0, t.jsx)("div", {
                          className: "exclusive-brands-heading",
                          children: "Exclusive Brands",
                        }),
                        (0, t.jsx)("div", {
                          className: "overflow-cont",
                          children:
                            (null === (l = n.exclusivebranddata) || void 0 === l
                              ? void 0
                              : l.length) > 0 &&
                            (null === (d = n.exclusivebranddata) || void 0 === d
                              ? void 0
                              : d.map((n, e) =>
                                  (0, t.jsx)(
                                    "div",
                                    {
                                      className: "ebrand-cont",
                                      children: (0, t.jsx)(U, {
                                        ExclusiveBrand: n,
                                      }),
                                    },
                                    e
                                  )
                                )),
                        }),
                      ],
                    }),
                  }),
                (0, t.jsx)("div", {
                  className: "ti-container bx-brd-box",
                  children: (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsx)("div", {
                      className: "col-12",
                      children: (0, t.jsx)("div", {
                        children: (0, t.jsx)(C.Z, {
                          trendingcategorydata: n.hometrendingcategorydata,
                        }),
                      }),
                    }),
                  }),
                }),
                (0, t.jsx)("div", { ref: B, children: (0, t.jsx)(E.Z, {}) }),
                (0, t.jsx)("div", {
                  className: "ti-container bx-brd-box py-4",
                  children: (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsxs)("div", {
                      className: "col-12",
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)(P, {
                            franchisescompdataList: n.franchisescompdataList,
                          }),
                        }),
                        (null === (u = n.getwanttobecomeDistributorData) ||
                        void 0 === u
                          ? void 0
                          : u.length) > 0 &&
                          (0, t.jsxs)("div", {
                            className: "col-12",
                            children: [
                              (0, t.jsx)("div", {
                                className: "bd-title",
                                children: "Discover Distributors' Inquiries",
                              }),
                              (0, t.jsx)("div", {
                                className: "row",
                                children:
                                  (null ===
                                    (b = n.getwanttobecomeDistributorData) ||
                                  void 0 === b
                                    ? void 0
                                    : b.length) > 0 &&
                                  (null ===
                                    (f = n.getwanttobecomeDistributorData) ||
                                  void 0 === f
                                    ? void 0
                                    : f.map((n, e) =>
                                        (0, t.jsx)(
                                          "div",
                                          {
                                            className:
                                              "col-6 col-md-3 mb-2 pb-1 custom-margin",
                                            children: (0, t.jsx)($, {
                                              becomeDistributorData: n,
                                            }),
                                          },
                                          e
                                        )
                                      )),
                              }),
                            ],
                          }),
                        (null === (g = n.hometestimonialsdatalist) ||
                        void 0 === g
                          ? void 0
                          : g.length) > 1 &&
                          (0, t.jsx)("div", {
                            className: "mt-4 mb-4 pb-0 pb-md-2",
                            children: (0, t.jsx)(S.Z, {
                              children:
                                (null === (v = n.hometestimonialsdatalist) ||
                                void 0 === v
                                  ? void 0
                                  : v.length) > 1 &&
                                (null === (w = n.hometestimonialsdatalist) ||
                                void 0 === w
                                  ? void 0
                                  : w.map((n, e) =>
                                      (0, t.jsx)(
                                        T.Z,
                                        {
                                          colorCode: e,
                                          tImage: n.client_image,
                                          cName: n.co_name,
                                          tContent: n.msg,
                                          tOwner: n.name,
                                          tdesignation: n.designation,
                                          pforilelink: n.view_more_link,
                                        },
                                        e
                                      )
                                    )),
                            }),
                          }),
                        n.webStories &&
                          (null === (j = n.webStories) || void 0 === j
                            ? void 0
                            : j.length) > 0 &&
                          (0, t.jsx)(nO, {
                            heading: "Top Web Stories",
                            content: "",
                            web_stories_data: n.webStories,
                          }),
                        (null === (k = n.latestblogdata) || void 0 === k
                          ? void 0
                          : k.length) > 0 &&
                          (0, t.jsxs)("div", {
                            className: "mb-4 pb-2 mt-5",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "d-flex align-items-center justify-content-between",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                      (0, t.jsx)(m.H2, {
                                        className: "blog-heading mb-md-2 mb-1",
                                        color: a.Z.colors.theme_secondary[200],
                                        children: "Latest Blog Posts",
                                      }),
                                      (0, t.jsx)(m.ao, {
                                        dfontWeight: 300,
                                        mfontWeight: 300,
                                        color: a.Z.colors.theme_secondary[100],
                                        className: "Body3R",
                                        children:
                                          "Explore Insider Tips, Expert Guidance, Success Stories, & Industry Insights",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "d-none d-md-block",
                                    children: (0, t.jsxs)(h.Z, {
                                      href: "https://blog.getdistributors.com",
                                      className:
                                        "blog-v-lnk d-flex align-items-center",
                                      children: [
                                        (0, t.jsx)(m.ao, {
                                          className: "mr-2 Body3R",
                                          children: "View All",
                                        }),
                                        (0, t.jsx)(p.Z, {
                                          width: 14,
                                          height: 14,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: "Blog-row",
                                children:
                                  (null === (y = n.latestblogdata) ||
                                  void 0 === y
                                    ? void 0
                                    : y.length) > 0 &&
                                  (null === (_ = n.latestblogdata) ||
                                  void 0 === _
                                    ? void 0
                                    : _.slice(0, 10).map((n, e) =>
                                        (0, t.jsx)(z.Z, { blogData: n }, e)
                                      )),
                              }),
                              (0, t.jsx)("div", {
                                className: "d-flex d-md-none",
                                children: (0, t.jsxs)(h.Z, {
                                  href: "https://blog.getdistributors.com",
                                  className:
                                    "blog-v-lnk full-w-link d-flex align-items-center",
                                  children: [
                                    (0, t.jsx)(m.ao, {
                                      className: "mr-2 Body3R",
                                      children: "View All",
                                    }),
                                    (0, t.jsx)(p.Z, { width: 14, height: 14 }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)(nZ.Z, {}),
                (0, t.jsx)(K.Z, {
                  askourexpertPopup: !0,
                  dType: "Popup",
                  mType: "Popup",
                  setPopup: M,
                  popup: !F && H,
                  bgClose: !0,
                  children: (0, t.jsx)(nC.Z, { withPopup: !0 }),
                }),
              ],
            })
          );
        },
        nE = s.ZP.div.withConfig({ componentId: "sc-66a1f50d-0" })(nT());
      var nA = i(8486),
        nL = i(6811),
        nU = i(3885);
      let nH = () =>
        (0, t.jsx)("div", {
          className: "ti-container bx-brd-box mt-3",
          children: (0, t.jsxs)("div", {
            className: "row",
            children: [
              (0, t.jsxs)("div", {
                className: "col-12 mb-3",
                children: [
                  (0, t.jsx)(nU.Z, {
                    sHeight: "360px",
                    className: "d-none d-md-block",
                  }),
                  (0, t.jsx)(nU.Z, {
                    sHeight: "200px",
                    className: "d-block d-md-none",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "col-12 mb-3",
                children: (0, t.jsx)(nU.Z, {
                  sHeight: "200px",
                  className: "d-none d-md-block",
                }),
              }),
              (0, t.jsx)("div", {
                className: "col-12 mb-4",
                children: (0, t.jsx)(nU.Z, {
                  sHeight: "80px",
                  className: "d-block d-md-none",
                }),
              }),
              (0, t.jsxs)("div", {
                className: "col-12",
                children: [
                  (0, t.jsx)("div", {
                    className: "col-6 col-md-3 mb-3",
                    children: (0, t.jsx)(nU.Z, { sHeight: "40px" }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row",
                    children: [...Array(16)].map((n, e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: "col-6 col-md-3 mb-2",
                          children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: "col-md-2 mt-2 mb-5 d-none d-md-block",
                    style: { float: "right" },
                    children: (0, t.jsx)(nU.Z, { sHeight: "30px" }),
                  }),
                  (0, t.jsx)("div", {
                    className: "col-12 mt-2 mb-5 d-block d-md-none",
                    children: (0, t.jsx)(nU.Z, { sHeight: "30px" }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "col-12 mb-5",
                children: [
                  (0, t.jsx)("div", {
                    className: "col-6 col-md-3 mb-3",
                    children: (0, t.jsx)(nU.Z, { sHeight: "40px" }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row d-none d-md-flex",
                    children: [void 0, void 0, void 0, void 0].map((n, e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: "col-6 col-md-3 mb-2",
                          children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: "row d-flex d-md-none",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-10",
                        children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-2",
                        children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "col-12 mb-4",
                children: [
                  (0, t.jsx)("div", {
                    className: "col-6 col-md-3 mb-3",
                    children: (0, t.jsx)(nU.Z, { sHeight: "40px" }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row d-none d-md-flex",
                    children: [...Array(12)].map((n, e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: "col-6 col-md-3 mb-2",
                          children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: "row d-flex d-md-none",
                    children: [
                      (0, t.jsx)("div", {
                        className: "col-10",
                        children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                      }),
                      (0, t.jsx)("div", {
                        className: "col-2",
                        children: (0, t.jsx)(nU.Z, { sHeight: "200px" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      var nM = i(6660);
      let nF = (n) => {
        let {
            loading: e,
            error: i,
            home_page_res: o,
          } = (0, V.v9)((n) => n.GDHomeApi.home_page),
          { userDetail_res: r } = (0, V.v9)((n) => n.GDHomeApi.userDetailsApi);
        return (0, t.jsx)(t.Fragment, {
          children: n.loading
            ? (0, t.jsx)(nH, {})
            : n.error
            ? (0, t.jsx)(nM.Z, {})
            : o
            ? (0, t.jsx)(nz, {
                franchisescompdataList: o.getFranchisesCompList,
                hometestimonialsdatalist: o.getHomeTestimonialsList,
                homemetatags: o.getHomeMetatag,
                hometrendingcategorydata: o.getHomeTrendingCategoryList,
                exclusivebranddata: o.getExclusiveBrandList,
                latestblogdata: o.getLatestBlogList,
                homeCategoryListdata: o.getHomeCategoryList,
                homedistributorshipdata: o.getdistributorshipList,
                getwanttobecomeDistributorData: o.getwanttobecomeDistributor,
                userDetail_res: r,
                recentAddeddistibutordata: o.getrecentAddeddistibutor,
                webStories: o.getWebStories,
              })
            : void 0,
        });
      };
      nF.getInitialProps = nA.Y.getInitialPageProps((n) => async (e) => {
        n.dispatch({ type: X.i4.GET_HOME_PAGE_DATA_REQUEST }),
          e.req && (n.dispatch(nL.uR), await n.sagaTask.toPromise());
      });
      var nG = nF;
    },
    5486: function (n, e, i) {
      "use strict";
      var t = i(7297),
        o = i(5893);
      i(7294);
      var r = i(9501),
        s = i(9521),
        a = i(5675),
        l = i.n(a),
        d = i(9386),
        c = i(6412);
      function p() {
        let n = (0, t.Z)([
          "\n  width: 100%;\n  background: #ffffff;\n  border: 1px solid #d2dae0;\n  border-radius: 32px;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ";\n        }\n      }\n    }\n  }\n  .imgCnt {\n    width: 100%;\n    height: 130px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-width: 100%;\n      max-height: 130px;\n      object-fit: contain;\n    }\n  }\n  .no-decoration {\n    text-decoration: none;\n    color: #323a43;\n  }\n  .info {\n    border-top: 1px solid #d2dae0;\n    padding: 15px;\n    .fcHeading {\n      color: ",
          ";\n      text-transform: none;\n      overflow: hidden;\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n    }\n    .fcSubHeading {\n      color: ",
          ";\n    }\n    .fcPara {\n      color: ",
          ";\n    }\n    .chips {\n      display: inline-flex;\n      background: #fff6ed;\n      border-radius: 50px;\n      padding: 3px 1rem;\n      font-weight: 400;\n      font-size: 10px;\n      line-height: 24px;\n      color: #e07f23;\n      margin-bottom: 0.5rem;\n      height: 28px;\n    }\n    .no-chips-data {\n      border-radius: 10px;\n      width: 80px;\n      height: 24px;\n    }\n  }\n  @media (min-width: 768px) {\n    border-radius: 32px;\n  }\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      let m = (n) => {
        var e, i, t, r, s, a, p;
        return (0, o.jsxs)(h, {
          children: [
            (0, o.jsx)("div", {
              className: "imgCnt",
              children: (0, o.jsxs)(d.Z, {
                href:
                  (0, c.K)().DOMAIN_URI +
                  (null === (e = n.data) || void 0 === e
                    ? void 0
                    : e.profile_link),
                className: "link-normal",
                children: [
                  " ",
                  (0, o.jsx)(l(), {
                    src:
                      null === (i = n.data) || void 0 === i
                        ? void 0
                        : i.logo_path,
                    alt: "brand name",
                    width: 180,
                    height: 70,
                  }),
                ],
              }),
            }),
            (0, o.jsxs)("div", {
              className: "info",
              children: [
                (0, o.jsx)("span", {
                  className: "".concat(
                    (null === (t = n.data) || void 0 === t
                      ? void 0
                      : t.cat_name) === null
                      ? "chips no-chips-data"
                      : "chips"
                  ),
                  children:
                    null === (r = n.data) || void 0 === r ? void 0 : r.cat_name,
                }),
                (0, o.jsx)(d.Z, {
                  href:
                    (0, c.K)().DOMAIN_URI +
                    (null === (s = n.data) || void 0 === s
                      ? void 0
                      : s.profile_link),
                  className: "no-decoration",
                  children: (0, o.jsx)("h3", {
                    className: "fcHeading h3 fW700",
                    children:
                      null === (a = n.data) || void 0 === a
                        ? void 0
                        : a.co_name,
                  }),
                }),
                (0, o.jsx)("p", {
                  className: "fcPara text14 fW400",
                  children: "Investment Price",
                }),
                (0, o.jsxs)("div", {
                  className: "fcSubHeading text14 fW500",
                  children: [
                    "₹ ",
                    null === (p = n.data) || void 0 === p
                      ? void 0
                      : p.investment_required,
                  ],
                }),
              ],
            }),
          ],
        });
      };
      e.Z = m;
      let h = s.ZP.div.withConfig({ componentId: "sc-f3f454f-0" })(
        p(),
        r.Z.colors.theme_primary.main,
        r.Z.colors.theme_primary.main,
        r.Z.colors,
        r.Z.colors.black,
        r.Z.colors.theme_info.text_color.dark_gray
      );
    },
    8994: function (n, e, i) {
      "use strict";
      var t = i(7297),
        o = i(5893);
      i(7294);
      var r = i(9521),
        s = i(9692),
        a = i(5213),
        l = i(329),
        d = i(9501),
        c = i(5675),
        p = i.n(c),
        m = i(572),
        h = i(4681),
        x = i(9386),
        u = i(6412);
      function b() {
        let n = (0, t.Z)([
          '\n  width: 100%;\n  background: #ffffff;\n  border: 1px solid #d2dae0;\n  border-radius: 32px;\n  transition: all 0.2s;\n  margin-bottom: 24px;\n  .fontftype {\n    font-family: "Urbanist";\n  }\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ',
          ";\n        a {\n          color: ",
          ";\n        }\n      }\n    }\n  }\n  .no-decoration {\n    text-decoration: none;\n    color: #323a43;\n  }\n  .imgCnt {\n    width: 100%;\n    height: 196px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px;\n    img {\n      max-width: 100%;\n      object-fit: contain;\n      /* max-height: 130px; */\n    }\n  }\n  .info {\n    border-top: 1px solid #d2dae0;\n    padding: 15px;\n    .moHeading {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    /* .dataTitle {\n      color: ",
          ";\n    } */\n    .dataDisc {\n      color: ",
          ";\n    }\n    .viewDtl {\n      color: ",
          ";\n      a {\n        text-decoration: none;\n        color: ",
          ";\n      }\n    }\n  }\n  .overflow-investment {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-left: 8px;\n  }\n  .txt-no-dec {\n    text-decoration: none;\n    color: #fff;\n    width: 100%;\n  }\n  .call-btn {\n    padding: 0;\n  }\n  .overflow-2 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  @media (min-width: 768px) {\n    .overflow-2 {\n      height:40px;\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      let f = (n) => {
        var e, i, t, r, c, b, f, v, w, j, k, y, N, _, Z, D, I, W;
        let C =
          (null === (e = n.data) || void 0 === e
            ? void 0
            : e.distributors_of) &&
          (null === (i = n.data) || void 0 === i
            ? void 0
            : null === (t = i.distributors_of) || void 0 === t
            ? void 0
            : t.split(",").slice(0, 4).join(", "));
        return (0, o.jsxs)(g, {
          children: [
            (0, o.jsx)("div", {
              className: "imgCnt",
              children: (0, o.jsx)(x.Z, {
                href:
                  (0, u.K)().DOMAIN_URI +
                  (null === (r = n.data) || void 0 === r
                    ? void 0
                    : r.profile_link),
                children: (0, o.jsx)(p(), {
                  src:
                    null === (c = n.data) || void 0 === c
                      ? void 0
                      : c.logo_path,
                  alt:
                    null === (b = n.data) || void 0 === b ? void 0 : b.cat_name,
                  width: 262,
                  height: 160,
                }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: "info",
              children: [
                (0, o.jsx)(m.Z, {
                  content:
                    null === (f = n.data) || void 0 === f ? void 0 : f.cat_name,
                  cWidth: !0,
                }),
                (0, o.jsxs)(x.Z, {
                  href:
                    (0, u.K)().DOMAIN_URI +
                    (null === (v = n.data) || void 0 === v
                      ? void 0
                      : v.profile_link),
                  className: "no-decoration",
                  children: [
                    " ",
                    (0, o.jsx)("h3", {
                      className: "moHeading h3 fW700 mb-1",
                      children:
                        null === (w = n.data) || void 0 === w
                          ? void 0
                          : w.co_name,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className:
                    "d-flex align-items-center justify-content-between",
                  children: [
                    (0, o.jsx)(h.$X, {
                      className: "".concat(
                        n.distributerPage
                          ? "dataTitle text14 fW400 Body4R"
                          : "dataTitle text14 fW400 Body4R d-none d-md-block"
                      ),
                      color: d.Z.colors.theme_secondary[100],
                      children: "Investment price range",
                    }),
                    (0, o.jsx)(p(), {
                      src: "/images/icons/money.svg",
                      alt: "money",
                      width: 18,
                      height: 18,
                      className: "".concat(
                        n.distributerPage ? "d-none" : "d-block d-md-none"
                      ),
                    }),
                    (0, o.jsxs)(h.o0, {
                      dfontWeight: 500,
                      mfontWeight: 500,
                      className:
                        "dataDisc text14 fW500 Body4R overflow-investment",
                      children: [
                        "₹ ",
                        null === (j = n.data) || void 0 === j
                          ? void 0
                          : j.min_investment,
                        " ",
                        null === (k = n.data) || void 0 === k
                          ? void 0
                          : k.investment_unit,
                        " - ₹",
                        " ",
                        null === (y = n.data) || void 0 === y
                          ? void 0
                          : y.max_investment,
                        " ",
                        null === (N = n.data) || void 0 === N
                          ? void 0
                          : N.investment_unit,
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className:
                    "d-flex align-items-center justify-content-between",
                  children: [
                    (0, o.jsx)(h.$X, {
                      className: "".concat(
                        n.distributerPage
                          ? "dataTitle text14 fW400 Body4R"
                          : "dataTitle text14 fW400 Body4R d-none d-md-block"
                      ),
                      color: d.Z.colors.theme_secondary[100],
                      children: "Established",
                    }),
                    (0, o.jsx)(a.Z, {
                      width: 14,
                      height: 14,
                      className: "".concat(
                        n.distributerPage ? "d-none" : "d-block d-md-none"
                      ),
                    }),
                    (0, o.jsx)(h.o0, {
                      dfontWeight: 500,
                      mfontWeight: 500,
                      className: "dataDisc text14 Body4R",
                      children:
                        null === (_ = n.data) || void 0 === _
                          ? void 0
                          : _.established,
                    }),
                  ],
                }),
                (null === (Z = n.data) || void 0 === Z
                  ? void 0
                  : Z.distributors_of) &&
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)(h.o0, {
                        mfontWeight: 500,
                        dfontWeight: 500,
                        className: "".concat(
                          (n.distributerPage, "dataTitle   Body4R fontftype")
                        ),
                        color: d.Z.colors.theme_secondary[100],
                        children: "Distributors of",
                      }),
                      (0, o.jsx)(h.ao, {
                        dfontWeight: 500,
                        mfontWeight: 500,
                        className:
                          "dataDisc text14 Body4R overflow-2 fontftype",
                        children: C,
                      }),
                    ],
                  }),
                (0, o.jsx)(s.WC, {
                  className: "mt-3 call-btn",
                  size: "large",
                  fullWidth: "100%",
                  bgColor: d.Z.colors.theme_secondary.blueBtn,
                  children: (0, o.jsxs)("a", {
                    href: "tel:".concat(
                      null === (D = n.data) || void 0 === D
                        ? void 0
                        : D.default_mobile
                    ),
                    className:
                      "txt-no-dec d-flex align-items-center justify-content-center",
                    children: [
                      (0, o.jsx)(l.Z, { className: "mr-2" }),
                      (0, o.jsx)(h.o0, {
                        className: "Body3R",
                        children:
                          null === (I = n.data) || void 0 === I
                            ? void 0
                            : I.default_mobile,
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "viewDtl mt-2 text14 fW500 text-center",
                  children: (0, o.jsxs)(x.Z, {
                    href:
                      (0, u.K)().DOMAIN_URI +
                      (null === (W = n.data) || void 0 === W
                        ? void 0
                        : W.profile_link),
                    className: "ebrand-link",
                    children: [" ", "View Details"],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      e.Z = f;
      let g = r.ZP.div.withConfig({ componentId: "sc-f07e648f-0" })(
        b(),
        d.Z.colors.theme_primary.main,
        d.Z.colors.theme_primary.main,
        d.Z.colors.theme_info.text_color.dark_gray,
        d.Z.colors.black,
        d.Z.colors.theme_secondary.main,
        d.Z.colors.theme_secondary.main
      );
    },
    147: function (n, e, i) {
      "use strict";
      var t = i(7297),
        o = i(5893),
        r = i(5675),
        s = i.n(r);
      i(7294);
      var a = i(9521),
        l = i(4681),
        d = i(9501),
        c = i(9386),
        p = i(628);
      function m() {
        let n = (0, t.Z)([
          "\n  flex: 0 0 296px;\n  margin-right: 16px;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    border-radius: 32px;\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ";\n        }\n      }\n    }\n  }\n\n  .blog-image {\n    width: 100%;\n    height: 220px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #cbd5e0;\n    border-radius: 32px 32px 0px 0px;\n    padding: 10px 8px;\n    box-sizing: border-box;\n  }\n  .blog-image img {\n    object-fit: contain;\n    max-width: 100%;\n  }\n  .blog-read-more-lnk {\n    text-decoration: none;\n    color: #f35b04;\n    border: 1px solid #f35b04;\n    padding: 12px 26px 12px 30px;\n    display: inline-block;\n    border-radius: 36px;\n  }\n  .blog-content {\n    border: 1px solid #cbd5e0;\n    border-radius: 0px 0px 32px 32px;\n    padding: 32px 32px 32px 32px;\n  }\n  .word-break {\n    white-space: normal;\n  }\n  .overflow-2 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n    height: 52px;\n  }\n  .overflow-8 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 8;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  .no-decoration {\n    text-decoration: none;\n  }\n  @media (min-width: 768px) {\n    flex: 0 0 382px;\n    margin-right: 20px;\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      let h = (n) => {
        var e, i, t, r, a, m;
        return (0, o.jsxs)(x, {
          children: [
            (0, o.jsx)(c.Z, {
              href:
                null === (e = n.blogData) || void 0 === e ? void 0 : e.blog_url,
              children: (0, o.jsx)("div", {
                className: "blog-image",
                children: (0, o.jsx)(s(), {
                  src:
                    null === (i = n.blogData) || void 0 === i
                      ? void 0
                      : i.img_path,
                  alt: "gd-blog",
                  width: 382,
                  height: 205,
                }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: "blog-content",
              children: [
                (0, o.jsx)(c.Z, {
                  href:
                    null === (t = n.blogData) || void 0 === t
                      ? void 0
                      : t.blog_url,
                  className: "no-decoration",
                  children: (0, o.jsx)(l.ks, {
                    className: "Body3R mb-2 pb-1 word-break overflow-2",
                    color: d.Z.colors.theme_info.text_color.dim_black,
                    dfontWeight: 500,
                    mfontWeight: 500,
                    children:
                      null === (r = n.blogData) || void 0 === r
                        ? void 0
                        : r.title,
                  }),
                }),
                (0, o.jsx)(l.ks, {
                  className: "Body3R mb-2 pb-1 word-break overflow-8",
                  color: d.Z.colors.theme_secondary[100],
                  dfontWeight: 300,
                  mfontWeight: 300,
                  children:
                    null === (a = n.blogData) || void 0 === a
                      ? void 0
                      : a.description,
                }),
                (0, o.jsx)(c.Z, {
                  href:
                    null === (m = n.blogData) || void 0 === m
                      ? void 0
                      : m.blog_url,
                  className: "blog-read-more-lnk",
                  children: (0, o.jsxs)(l.$X, {
                    className: "Body4R d-flex align-items-center",
                    children: [
                      "Read More ",
                      (0, o.jsx)(p.Z, { width: 24, height: 18 }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      e.Z = h;
      let x = a.ZP.div.withConfig({ componentId: "sc-7a6e76df-0" })(
        m(),
        d.Z.colors.theme_primary.main,
        d.Z.colors.theme_primary.main
      );
    },
    6635: function (n, e, i) {
      "use strict";
      var t = i(7297),
        o = i(5893),
        r = i(5675),
        s = i.n(r);
      i(7294);
      var a = i(9386),
        l = i(9521),
        d = i(4681),
        c = i(9501),
        p = i(6412);
      function m() {
        let n = (0, t.Z)([
          "\n  background: #eef6ff;\n  background: ",
          ";\n\n  border-radius: 32px;\n  padding: 38px 26px 22px 26px;\n  position: relative;\n  &:hover {\n    box-shadow: 8px 16px 16px rgba(210, 218, 224, 0.5);\n    .info {\n      .viewDtl {\n        color: ",
          ";\n        a {\n          color: ",
          ";\n        }\n      }\n    }\n  }\n  .txt-transform {\n    text-transform: uppercase;\n  }\n  .first-letter {\n    background: #feeccc;\n    border: 1px solid #d7af66;\n    width: 46px;\n    height: 46px;\n    border-radius: 100%;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 24px;\n    color: #d7af66;\n  }\n  .quotes-img {\n    position: absolute;\n    right: 24px;\n    bottom: 24px;\n  }\n  .link-normal {\n    text-decoration: none;\n  }\n  .mb-overflow {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  .owner-img {\n    border-radius: 100%;\n  }\n  .overflow-content {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 5;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  .owner-ovrflow {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n  @media (min-width: 768px) {\n    .owner-ovrflow {\n      -webkit-line-clamp: 2;\n    }\n    .overflow-content {\n      -webkit-line-clamp: 4;\n    }\n  }\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      let h = (n) => {
        var e, i;
        return (0, o.jsx)(x, {
          colorCode:
            0 == (i = n.colorCode)
              ? "#FFF9EE"
              : 1 == i
              ? "#E7F5E8"
              : 2 == i
              ? "#EEF6FF"
              : 3 == i
              ? "#F1F1F1"
              : void 0,
          children: (0, o.jsxs)(a.Z, {
            href: (0, p.K)().DOMAIN_URI + n.pforilelink,
            className: "link-normal",
            children: [
              (0, o.jsxs)("div", {
                className: "d-flex align-items-center mb-2 ",
                children: [
                  (0, o.jsx)(s(), {
                    src: n.tImage,
                    alt: n.tOwner,
                    width: 56,
                    height: 56,
                    className: "owner-img",
                  }),
                  (0, o.jsxs)("div", {
                    className: "ml-2 pl-1",
                    children: [
                      (0, o.jsx)(d.$X, {
                        color: c.Z.colors.theme_secondary[100],
                        dfontWeight: 500,
                        mfontWeight: 500,
                        className: "Body4R mb-overflow",
                        children: n.tdesignation,
                      }),
                      (0, o.jsx)(d.$X, {
                        color: c.Z.colors.theme_secondary[200],
                        dfontWeight: 500,
                        mfontWeight: 500,
                        className: "Body4R txt-transform mb-overflow",
                        children: n.cName,
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(d.ks, {
                dfontWeight: 300,
                mfontWeight: 300,
                className: "Body3R overflow-content",
                color: c.Z.colors.theme_secondary[200],
                children: n.tContent,
              }),
              (0, o.jsxs)("div", {
                className: "d-flex align-items-center mt-3",
                children: [
                  (0, o.jsx)("span", {
                    className:
                      "first-letter txt-transform d-flex align-items-center justify-content-center",
                    children:
                      null === (e = n.tOwner) || void 0 === e
                        ? void 0
                        : e.slice(0, 1),
                  }),
                  (0, o.jsx)(d.ks, {
                    dfontWeight: 700,
                    mfontWeight: 700,
                    className: "Body3R txt-transform ml-2 owner-ovrflow",
                    color: c.Z.colors.theme_secondary[200],
                    children: n.tOwner,
                  }),
                ],
              }),
              (0, o.jsx)("span", {
                className: "quotes-img",
                children: (0, o.jsx)(s(), {
                  src: "/images/dummy/dbl-quotes.png",
                  alt: "quotes",
                  width: 54,
                  height: 40,
                }),
              }),
            ],
          }),
        });
      };
      e.Z = h;
      let x = l.ZP.div.withConfig({ componentId: "sc-e522b609-0" })(
        m(),
        (n) => n.colorCode,
        c.Z.colors.theme_primary.main,
        c.Z.colors.theme_primary.main
      );
    },
    4612: function (n, e, i) {
      "use strict";
      var t = i(7297),
        o = i(5893);
      i(7294);
      var r = i(6066),
        s = i(9521),
        a = i(2954),
        l = i(4681),
        d = i(9501);
      function c() {
        let n = (0, t.Z)([
          '\n  .sub-head {\n    font-family: "Ubuntu";\n  }\n  div.slick-slide {\n    width: calc(100vw - 54px);\n  }\n  button.slick-next,\n  button.slick-prev {\n    background-color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: solid 1px #f35b04;\n    z-index: 2;\n    top: 60px;\n  }\n  button.slick-prev {\n    padding: 0 0 0 4px;\n    left: calc(100% - 5rem);\n    top: -3rem;\n  }\n  button.slick-next {\n    padding: 0 4px 0 0;\n    right: 0;\n    top: -3rem;\n  }\n\n  div.slick-slide > div {\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n  .slick-list {\n    margin: 0px -10px 0px -10px;\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n  button.slick-prev:before,\n  button.slick-next:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 8px;\n    height: 8px;\n    border-right: solid 1px #f35b04;\n    border-top: solid 1px #f35b04;\n    transform: rotate(-135deg);\n  }\n  button.slick-next:before {\n    transform: rotate(45deg);\n  }\n  button.slick-next:hover,\n  button.slick-prev:hover {\n    background-color: #f35b04;\n  }\n  button.slick-prev:hover:before,\n  button.slick-next:hover:before {\n    border-color: #fff;\n  }\n  /* .slick-arrow {\n    display: none !important;\n  } */\n  .slick-slider:hover .slick-arrow {\n    display: block !important;\n  }\n  .heading {\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    color: #323a43;\n    font-family: "Urbanist";\n  }\n  @media screen and (min-width: 576px) {\n    .heading {\n      font-size: 32px;\n      line-height: 24px;\n    }\n    div.slick-slide {\n      width: inherit;\n    }\n    button.slick-arrow.slick-prev.slick-disabled,\n    button.slick-arrow.slick-next.slick-disabled {\n      border-color: #d7d7d7;\n    }\n    .slick-prev.slick-disabled:hover,\n    .slick-next.slick-disabled:hover {\n      background-color: white;\n    }\n    .slick-prev.slick-disabled:hover:before,\n    .slick-next.slick-disabled:hover:before {\n      border-color: #f35b04;\n    }\n  }\n',
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      let p = (n) => {
          let { className: e, children: i } = n;
          return (0, o.jsx)(a.X, {
            children: (0, o.jsxs)(m, {
              className: e,
              children: [
                (0, o.jsxs)("div", {
                  className: "mb-4",
                  ref: n.refProp,
                  children: [
                    (0, o.jsx)("h2", {
                      className: "heading mb-1",
                      children: "Success Stories",
                    }),
                    (0, o.jsx)(l.ao, {
                      className: "Body1R sub-head",
                      dfontWeight: 300,
                      mfontWeight: 300,
                      color: d.Z.colors.theme_secondary[100],
                      children:
                        "Our clients' testimonials speak volumes of satisfaction",
                    }),
                  ],
                }),
                (0, o.jsx)(r.Z, {
                  dots: !1,
                  infinite: !1,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: !0,
                  autoplay: !0,
                  autoplaySpeed: 3e3,
                  pauseOnHover: !1,
                  responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: !1,
                      },
                    },
                    {
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        variableWidth: !0,
                      },
                    },
                  ],
                  children: i,
                }),
              ],
            }),
          });
        },
        m = s.ZP.div.withConfig({ componentId: "sc-927f2e71-0" })(c());
      e.Z = p;
    },
    628: function (n, e, i) {
      "use strict";
      var t = i(7294),
        o = i(5697),
        r = i.n(o);
      function s() {
        return (s =
          Object.assign ||
          function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var t in i)
                Object.prototype.hasOwnProperty.call(i, t) && (n[t] = i[t]);
            }
            return n;
          }).apply(this, arguments);
      }
      var a = (0, t.forwardRef)(function (n, e) {
        var i = n.color,
          o = n.size,
          r = void 0 === o ? 24 : o,
          a = (function (n, e) {
            if (null == n) return {};
            var i,
              t,
              o = (function (n, e) {
                if (null == n) return {};
                var i,
                  t,
                  o = {},
                  r = Object.keys(n);
                for (t = 0; t < r.length; t++)
                  (i = r[t]), e.indexOf(i) >= 0 || (o[i] = n[i]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              for (t = 0; t < r.length; t++)
                (i = r[t]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(n, i) &&
                    (o[i] = n[i]);
            }
            return o;
          })(n, ["color", "size"]);
        return t.createElement(
          "svg",
          s(
            {
              ref: e,
              xmlns: "http://www.w3.org/2000/svg",
              width: r,
              height: r,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === i ? "currentColor" : i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            a
          ),
          t.createElement("polyline", { points: "9 18 15 12 9 6" })
        );
      });
      (a.propTypes = {
        color: r().string,
        size: r().oneOfType([r().string, r().number]),
      }),
        (a.displayName = "ChevronRight"),
        (e.Z = a);
    },
  },
  function (n) {
    n.O(
      0,
      [157, 141, 725, 66, 443, 377, 837, 404, 254, 362, 931, 774, 888, 179],
      function () {
        return n((n.s = 8312));
      }
    ),
      (_N_E = n.O());
  },
]);
