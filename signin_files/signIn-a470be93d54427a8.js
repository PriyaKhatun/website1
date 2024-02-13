(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [256],
  {
    9500: function (n, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/signIn",
        function () {
          return i(2436);
        },
      ]);
    },
    2436: function (n, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return K;
          },
        });
      var t = i(7297),
        o = i(5893),
        l = i(7294),
        s = i(1649),
        r = i(6811),
        a = i(9521),
        c = i(2100),
        d = i(4681),
        p = i(9501),
        m = i(5862),
        h = i(8357),
        u = i(9574),
        x = i(5697),
        f = i.n(x);
      function g() {
        return (g =
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
      var b = (0, l.forwardRef)(function (n, e) {
        var i = n.color,
          t = n.size,
          o = void 0 === t ? 24 : t,
          s = (function (n, e) {
            if (null == n) return {};
            var i,
              t,
              o = (function (n, e) {
                if (null == n) return {};
                var i,
                  t,
                  o = {},
                  l = Object.keys(n);
                for (t = 0; t < l.length; t++)
                  (i = l[t]), e.indexOf(i) >= 0 || (o[i] = n[i]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(n);
              for (t = 0; t < l.length; t++)
                (i = l[t]),
                  !(e.indexOf(i) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(n, i) &&
                    (o[i] = n[i]);
            }
            return o;
          })(n, ["color", "size"]);
        return l.createElement(
          "svg",
          g(
            {
              ref: e,
              xmlns: "http://www.w3.org/2000/svg",
              width: o,
              height: o,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === i ? "currentColor" : i,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            s
          ),
          l.createElement("polyline", { points: "20 6 9 17 4 12" })
        );
      });
      function v() {
        let n = (0, t.Z)([
          "\n  border: 1px solid #e1771a;\n  position: relative;\n  display: inline-block !important;\n  height: 24px;\n  width: 24px;\n  background-color: #fff;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    position: relative;\n    top: 2px;\n    left: 2px;\n  }\n  input {\n    opacity: 0;\n    position: absolute;\n    height: 24px;\n    width: 24px;\n    top: -3px;\n    left: -4px;\n    z-index: 1;\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, t.Z)([
          "\n      border: 1px solid #e1771a;\n      background-color: #e1771a;\n    ",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, t.Z)([
          "\n  height: 24px;\n  width: 24px;\n  position: absolute;\n  border-radius: 4px;\n  left: -1px;\n  top: -1px;\n  ",
          "\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      (b.propTypes = {
        color: f().string,
        size: f().oneOfType([f().string, f().number]),
      }),
        (b.displayName = "Check");
      let w = (n) => {
          let { checked: e, onChange: i, className: t, id: l, name: s } = n;
          return (0, o.jsxs)(j, {
            className: t,
            children: [
              (0, o.jsx)("input", {
                type: "checkbox",
                checked: e,
                onChange: i,
                id: l,
                name: s,
              }),
              (0, o.jsx)(_, {
                checked: e,
                className: "checkBox",
                children:
                  e &&
                  (0, o.jsx)(b, { color: "#FFFFFF", height: 20, width: 20 }),
              }),
            ],
          });
        },
        j = a.ZP.span.withConfig({ componentId: "sc-f1e94373-0" })(v()),
        _ = a.ZP.span.withConfig({ componentId: "sc-f1e94373-1" })(
          y(),
          (n) => n.checked && (0, a.iv)(k())
        );
      var N = i(5675),
        S = i.n(N),
        C = i(9692),
        Z = i(5169),
        E = i(2175),
        T = i(7886),
        I = i(1475),
        O = i(1163);
      function z() {
        let n = (0, t.Z)([
          '\n  .form-heading {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 42px;\n    line-height: 50px;\n    color: #323a43;\n  }\n  .error {\n    color: #c12727;\n    font-size: 14px;\n  }\n  .mob-input-cont {\n    margin-top: 0px;\n    margin-bottom: 26px;\n  }\n  .login-btn button {\n    background-color: #3d348b;\n    margin-top: 36px;\n    margin-bottom: 22px;\n    width: 100%;\n  }\n  .email-login {\n    text-decoration: none;\n    color: #f35b04;\n    cursor: pointer;\n  }\n  @media (min-width: 768px) {\n    .login-btn button {\n      background-color: #3d348b;\n      margin-top: 36px;\n      margin-bottom: 22px;\n      width: 400px;\n    }\n  }\n',
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, t.Z)([
          "\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n\n  .country-drop {\n    border: 1px solid rgba(80, 128, 142, 0.3);\n    display: block;\n    width: 100px;\n    height: 58px;\n    border-radius: 8px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    margin-bottom: 6px;\n    margin-right: 10px;\n    /* background: #fff; */\n    background: rgba(241, 245, 249, 0.4);\n    overflow: hidden;\n  }\n  .mob-input {\n    width: auto;\n    margin-right: 0px;\n  }\n  .mob-input input {\n    border-radius: 0px;\n  }\n  @media (min-width: 768px) {\n    .mob-input {\n      width: 298px;\n      margin-right: 20px;\n    }\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, t.Z)([
          "\n  background-image: url(/images/icons/select-arrow.svg);\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0px) center;\n  .selected_value {\n    display: flex;\n    align-items: center;\n    height: 56px;\n    width: 66px;\n  }\n  .code {\n    font-size: 14px;\n    color: ",
          ";\n    font-weight: 500;\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      let R = (n) => {
          let [e, i] = (0, l.useState)(m.x[0]),
            [t, r] = (0, l.useState)(!0),
            a = (0, O.useRouter)(),
            c = (0, s.I0)(),
            x = (0, s.v9)((n) => n.GDAuthApi.login_info);
          (0, l.useEffect)(() => {
            var i, t, o;
            (null == x
              ? void 0
              : null === (i = x.error) || void 0 === i
              ? void 0
              : null === (t = i.response) || void 0 === t
              ? void 0
              : t.error) == "Mobile Number does not exist."
              ? (a.push({
                  pathname: "/joinFree",
                  query: { mobileinfo: v.mobile, country_code: e.code },
                }),
                c({ type: I.Ap.RESET_ALL_AUTH }))
              : (null == x
                  ? void 0
                  : null === (o = x.login_info_res) || void 0 === o
                  ? void 0
                  : o.otpk) &&
                (n.setmobileinfo({
                  mobileinfo: v.mobile,
                  country_code: e.code,
                }),
                n.setStep("step2"));
          }, [x]);
          let f = (0, E.TA)({
              initialValues: { mobile: "", isMobile: !0 },
              validationSchema: T.vc,
              onSubmit: (n) => {
                let { mobile: i } = n;
                if (y) {
                  let n = { email_or_mobile: e.code + v.mobile };
                  c({ type: I.Ap.POST_LOGIN_REQUEST, data: n });
                }
              },
            }),
            {
              errors: g,
              touched: b,
              values: v,
              handleSubmit: k,
              isValid: y,
              setFieldValue: j,
            } = f;
          return (0, o.jsx)(W, {
            children: (0, o.jsxs)("div", {
              className: "form-step",
              children: [
                (0, o.jsx)("div", {
                  className: "form-heading mb-3",
                  children: "Sign In",
                }),
                (0, o.jsxs)(d.$X, {
                  className: "Body3R mb-4",
                  color: p.Z.colors.theme_secondary[900],
                  children: [
                    "Sign in to Get The Best Deals, Exclusive ",
                    (0, o.jsx)("br", {}),
                    " Offers with GetDistributors",
                  ],
                }),
                (0, o.jsxs)("form", {
                  onSubmit: k,
                  noValidate: !0,
                  children: [
                    (0, o.jsx)("div", {
                      className: "mob-input-cont",
                      children: (0, o.jsxs)(L, {
                        children: [
                          (0, o.jsx)("div", {
                            className: "country-drop",
                            children: (0, o.jsx)(h.Z, {
                              selectField: (0, o.jsxs)(U, {
                                children: [
                                  (0, o.jsxs)("div", {
                                    className: "selected_value",
                                    children: [
                                      (0, o.jsx)("img", {
                                        loading: "lazy",
                                        decoding: "async",
                                        className: "mr-2",
                                        height: "20",
                                        width: "20",
                                        src: e.flag,
                                        alt: "flag",
                                      }),
                                      (0, o.jsx)("span", {
                                        className: "code",
                                        children: e.code,
                                      }),
                                    ],
                                  }),
                                  (0, o.jsx)("label", {
                                    className: "city_label d-none",
                                    children: "country",
                                  }),
                                  (0, o.jsx)("span", {
                                    className: "down_icon",
                                  }),
                                ],
                              }),
                              handleOnchange: (n) => i(n),
                              list: m.x,
                              isCountrySelect: !0,
                            }),
                          }),
                          (0, o.jsxs)("div", {
                            style: { flex: 1 },
                            className: "mob-input",
                            children: [
                              (0, o.jsx)(u.o, {
                                name: "mobile",
                                type: "number",
                                label: "Mobile No",
                                variant: "label",
                                maxlength: "10",
                                value: v.mobile,
                                onChange: (n) => j("mobile", n.target.value),
                              }),
                              g.mobile &&
                                b.mobile &&
                                (0, o.jsx)("span", {
                                  className: "error",
                                  children: g.mobile,
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "d-flex",
                      children: [
                        (0, o.jsx)(w, { checked: t, onChange: () => r(!t) }),
                        (0, o.jsxs)("div", {
                          className: "d-flex ml-3",
                          children: [
                            (0, o.jsx)(S(), {
                              src: "/images/icons/watsapp-logo.svg",
                              alt: "watsapp",
                              width: 20,
                              height: 20,
                            }),
                            (0, o.jsxs)(d.o0, {
                              className: "Body4R ml-2",
                              children: [
                                "Would you like to get updates over Whatsapp",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "login-btn",
                      children: (0, o.jsxs)(C.WC, {
                        size: "large",
                        fontWeight: "500",
                        fullWidth: "400px",
                        type: "submit",
                        children: [
                          "Continue to Sign In",
                          (0, o.jsx)(Z.Z, {
                            width: 14,
                            height: 14,
                            className: "ml-3",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "email-login",
                  onClick: () => n.setStep("step3"),
                  children: [
                    (0, o.jsx)(d.GV, {
                      className: "Body3R",
                      children: "Login With Email",
                    }),
                    " ",
                  ],
                }),
              ],
            }),
          });
        },
        W = a.ZP.div.withConfig({ componentId: "sc-cff99f9e-0" })(z()),
        L = a.ZP.div.withConfig({ componentId: "sc-cff99f9e-1" })(A()),
        U = a.ZP.div.withConfig({ componentId: "sc-cff99f9e-2" })(
          P(),
          p.Z.colors.theme_secondary.dark
        );
      function G() {
        let n = (0, t.Z)([
          '\n  .form-heading {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 42px;\n    line-height: 50px;\n    color: #323a43;\n  }\n  .error {\n    color: #c12727;\n    font-size: 14px;\n  }\n  .mob-input-cont {\n    margin-top: 0px;\n    margin-bottom: 26px;\n  }\n  .login-btn button {\n    background-color: #3d348b;\n    margin-top: 36px;\n    margin-bottom: 22px;\n    width: 100%;\n  }\n  .email-login {\n    text-decoration: none;\n    color: #f35b04;\n    cursor: pointer;\n  }\n  @media (min-width: 768px) {\n    .login-btn button {\n      background-color: #3d348b;\n      margin-top: 36px;\n      margin-bottom: 22px;\n      width: 400px;\n    }\n  }\n',
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      let B = (n) => {
          let [e, i] = (0, l.useState)(m.x[0]),
            [t, r] = (0, l.useState)(!0),
            a = (0, s.I0)(),
            c = (0, s.v9)((n) => n.GDAuthApi.login_info),
            h = (0, O.useRouter)();
          (0, l.useEffect)(() => {
            var e, i, t;
            (null == c
              ? void 0
              : null === (e = c.error) || void 0 === e
              ? void 0
              : null === (i = e.response) || void 0 === i
              ? void 0
              : i.error) == "Email Id does not exist."
              ? (h.push({
                  pathname: "/joinFree",
                  query: { email: b.email.toLowerCase() },
                }),
                a({ type: I.Ap.RESET_ALL_AUTH }))
              : (null == c
                  ? void 0
                  : null === (t = c.login_info_res) || void 0 === t
                  ? void 0
                  : t.otpk) && n.setStep("step4");
          }, [c]);
          let x = (0, E.TA)({
              initialValues: { email: "" },
              validationSchema: T.vc,
              onSubmit: (n) => {
                let { email: e } = n;
                if (k) {
                  let n = { email_or_mobile: b.email };
                  a({ type: I.Ap.POST_LOGIN_REQUEST, data: n });
                }
              },
            }),
            {
              errors: f,
              touched: g,
              values: b,
              handleSubmit: v,
              isValid: k,
              setFieldValue: y,
            } = x;
          return (0, o.jsx)(D, {
            children: (0, o.jsxs)("div", {
              className: "form-step",
              children: [
                (0, o.jsx)("div", {
                  className: "form-heading mb-3",
                  children: "Sign In",
                }),
                (0, o.jsxs)(d.$X, {
                  className: "Body3R mb-4",
                  color: p.Z.colors.theme_secondary[900],
                  children: [
                    "Sign in to Get The Best Deals, Exclusive ",
                    (0, o.jsx)("br", {}),
                    " Offers with GetDistributors",
                  ],
                }),
                (0, o.jsxs)("form", {
                  onSubmit: v,
                  noValidate: !0,
                  children: [
                    (0, o.jsx)("div", {
                      className: "mob-input-cont",
                      children: (0, o.jsxs)("div", {
                        style: { flex: 1 },
                        className: "mob-input",
                        children: [
                          (0, o.jsx)(u.o, {
                            name: "email",
                            type: "text",
                            value: b.email,
                            label: "Email",
                            variant: "label",
                            onChange: (n) => y("email", n.target.value),
                          }),
                          f.email &&
                            g.email &&
                            (0, o.jsx)("span", {
                              className: "error",
                              children: f.email,
                            }),
                        ],
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "d-flex",
                      children: [
                        (0, o.jsx)(w, { checked: t, onChange: () => r(!t) }),
                        (0, o.jsxs)("div", {
                          className: "d-flex ml-3",
                          children: [
                            (0, o.jsx)(S(), {
                              src: "/images/icons/watsapp-logo.svg",
                              alt: "watsapp",
                              width: 20,
                              height: 20,
                            }),
                            (0, o.jsxs)(d.o0, {
                              className: "Body4R ml-2",
                              children: [
                                "Would you like to get updates over Whatsapp",
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "login-btn",
                      children: (0, o.jsxs)(C.WC, {
                        size: "large",
                        fontWeight: "500",
                        fullWidth: "400px",
                        type: "submit",
                        children: [
                          "Continue to Sign In",
                          (0, o.jsx)(Z.Z, {
                            width: 14,
                            height: 14,
                            className: "ml-3",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "email-login",
                  onClick: () => n.setStep("step1"),
                  children: [
                    (0, o.jsx)(d.GV, {
                      className: "Body3R",
                      children: "Login With Mobile",
                    }),
                    " ",
                  ],
                }),
              ],
            }),
          });
        },
        D = a.ZP.div.withConfig({ componentId: "sc-85b22459-0" })(G());
      var X = i(4844);
      function F() {
        let n = (0, t.Z)([
          '\n  font-family: "Urbanist";\n  .otp-heading {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 24px;\n    color: #323a43;\n    margin-bottom: 6px;\n  }\n  .otp-input-cont {\n    margin-top: 42px;\n  }\n  .otp-input-cont .otpInput {\n    width: 60px;\n    height: 60px;\n    margin-right: 12px;\n    text-align: center;\n    outline: none;\n    font-size: 20px;\n    background: #ffffff;\n    border: 1px solid #cbd5e0;\n    border-radius: 8px;\n    padding-left: 10px;\n    color: #323a43;\n    font-weight: 500;\n  }\n  .otp-input-cont {\n    display: flex;\n    /* justify-content: center; */\n  }\n  .otp-input-cont .otpInput:last-child {\n    margin-right: 0;\n  }\n  .resend-section {\n    margin-top: -12px;\n  }\n  .resend {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  .verify-btn button {\n    background-color: #3d348b;\n    margin-top: 42px;\n    margin-bottom: 22px;\n    width: 100%;\n  }\n  .msg-cnt {\n    flex-wrap: wrap;\n  }\n  @media (min-width: 768px) {\n    .verify-btn button {\n      background-color: #3d348b;\n      margin-top: 42px;\n      margin-bottom: 22px;\n      width: 400px;\n    }\n    .otp-input-cont .otpInput {\n      width: 90px;\n      height: 90px;\n    }\n  }\n',
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      let H = (n) => {
          var e, i;
          let t = (0, s.I0)(),
            r = (0, O.useRouter)(),
            [a, c] = (0, l.useState)(),
            [m, h] = (0, l.useState)(""),
            u = (0, s.v9)((n) => n.GDAuthApi.login_info),
            x = (0, s.v9)((n) => n.GDAuthApi.login_otp_info);
          (0, l.useEffect)(() => {
            var n, e, i, o, l, s, a;
            (
              null == x
                ? void 0
                : null === (n = x.login_otp_res) || void 0 === n
                ? void 0
                : n.SUCCESS
            )
              ? (r.push("/"), t({ type: I.Ap.RESET_ALL_AUTH }))
              : (
                  null == x
                    ? void 0
                    : null === (e = x.otperror) || void 0 === e
                    ? void 0
                    : e.error
                )
              ? h(
                  null == x
                    ? void 0
                    : null === (a = x.otperror) || void 0 === a
                    ? void 0
                    : a.error
                )
              : ((null == x
                  ? void 0
                  : null === (i = x.otperror) || void 0 === i
                  ? void 0
                  : null === (o = i.response) || void 0 === o
                  ? void 0
                  : o.error) == "Login Failed, Please Contact HelpDesk" ||
                  (null == x
                    ? void 0
                    : null === (l = x.otperror) || void 0 === l
                    ? void 0
                    : null === (s = l.response) || void 0 === s
                    ? void 0
                    : s.error) === "Wrong password.") &&
                h("Invalid OTP");
          }, [null == x ? void 0 : x.login_otp_res]);
          let f = (n) => {
              var e, i, o, l, s;
              let r = {
                otp: n,
                userid:
                  null == u
                    ? void 0
                    : null === (e = u.login_info_res) || void 0 === e
                    ? void 0
                    : e.userid,
                otpk:
                  null == u
                    ? void 0
                    : null === (i = u.login_info_res) || void 0 === i
                    ? void 0
                    : i.otpk,
              };
              (
                null == u
                  ? void 0
                  : null === (o = u.login_info_res) || void 0 === o
                  ? void 0
                  : o.mobile
              )
                ? ((r.section = "2"),
                  (r.mobile =
                    null == u
                      ? void 0
                      : null === (l = u.login_info_res) || void 0 === l
                      ? void 0
                      : l.mobile))
                : ((r.section = "1"),
                  (r.username =
                    null == u
                      ? void 0
                      : null === (s = u.login_info_res) || void 0 === s
                      ? void 0
                      : s.email)),
                t({ type: I.Ap.POST_LOGIN_OTP_REQUEST, otpdata: r });
            },
            g = () => {
              var e, i, o;
              let l = {
                email_or_mobile: n.emailOtp
                  ? null == u
                    ? void 0
                    : null === (e = u.login_info_res) || void 0 === e
                    ? void 0
                    : e.email
                  : (null === (i = n.mobileinfo) || void 0 === i
                      ? void 0
                      : i.country_code) +
                    (null === (o = n.mobileinfo) || void 0 === o
                      ? void 0
                      : o.mobileinfo),
              };
              t({ type: I.Ap.POST_LOGIN_REQUEST, data: l });
            },
            b = () => {
              t({ type: I.Ap.RESET_ALL_AUTH }),
                n.emailOtp ? n.setStep("step3") : n.setStep("step1");
            };
          return (0, o.jsxs)(V, {
            children: [
              n.emailOtp
                ? (0, o.jsx)("div", {
                    className: "otp-heading",
                    children: "Please check your e-mail",
                  })
                : (0, o.jsx)("div", {
                    className: "otp-heading",
                    children: "Please check your mobile",
                  }),
              (0, o.jsxs)("div", {
                className: "d-flex msg-cnt",
                children: [
                  (0, o.jsx)(d.$X, {
                    className: "Body4R",
                    color: p.Z.colors.theme_secondary[100],
                    children: "We’ve sent a code to",
                  }),
                  " ",
                  (0, o.jsx)(d.$X, {
                    className: "mob-no ml-1",
                    dfontWeight: 500,
                    mfontWeight: 500,
                    color: p.Z.colors.theme_secondary[200],
                    children: n.emailOtp
                      ? null == u
                        ? void 0
                        : null === (e = u.login_info_res) || void 0 === e
                        ? void 0
                        : e.email
                      : null == u
                      ? void 0
                      : null === (i = u.login_info_res) || void 0 === i
                      ? void 0
                      : i.mobile,
                  }),
                  (0, o.jsx)(d.$X, {
                    className: "resend ml-1",
                    dfontWeight: 500,
                    mfontWeight: 500,
                    onClick: () => b(),
                    style: { color: "#db2418" },
                    children: "change",
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "otp-input-cont",
                children: (0, o.jsx)(X.Z, {
                  autoFocus: !0,
                  isNumberInput: !0,
                  length: 4,
                  className: "otpContainer mb-4",
                  inputClassName: "otpInput",
                  onChangeOTP: (n) => {
                    h(""), c(n);
                  },
                }),
              }),
              (0, o.jsxs)("div", {
                className: "d-flex resend-section",
                children: [
                  (0, o.jsx)(d.$X, {
                    className: "Body4R",
                    style: { color: "#db2418", marginBottom: "10px" },
                    children: m,
                  }),
                  " ",
                ],
              }),
              (0, o.jsxs)("div", {
                className: "d-flex resend-section",
                onClick: () => g(),
                children: [
                  (0, o.jsx)(d.$X, {
                    className: "Body4R",
                    color: p.Z.colors.theme_secondary[100],
                    children: "Didn’t get a code?",
                  }),
                  " ",
                  (0, o.jsx)(d.$X, {
                    className: "resend ml-1",
                    dfontWeight: 500,
                    mfontWeight: 500,
                    color: p.Z.colors.theme_secondary[200],
                    children: "Click to resend",
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "verify-btn",
                onClick: () => f(a),
                children: (0, o.jsxs)(C.WC, {
                  size: "large",
                  fontWeight: "500",
                  fullWidth: "400px",
                  children: [
                    "Verify",
                    (0, o.jsx)(Z.Z, {
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
        V = a.ZP.div.withConfig({ componentId: "sc-d3d88f0-0" })(F());
      function $() {
        let n = (0, t.Z)([
          "\n  .form-content {\n    margin-right: 0px;\n  }\n  .mobile-title-cont {\n    margin-bottom: 46px;\n  }\n  .form-link {\n    text-decoration: none;\n  }\n  .mobile-title-cont {\n    text-align: center;\n  }\n  @media (min-width: 768px) {\n    .form-content {\n      margin-right: 86px;\n    }\n  }\n",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      let q = (n) => {
          let [e, i] = (0, l.useState)("step1"),
            [t, r] = (0, l.useState)(""),
            a = (0, O.useRouter)(),
            d = (0, s.I0)(),
            p = () => {
              a.push("/"), d({ type: I.Ap.RESET_ALL_AUTH });
            };
          return (0, o.jsx)(M, {
            children: (0, o.jsx)("div", {
              className: "ti-container bx-brd-box py-4",
              children: (0, o.jsx)("div", {
                className: "row",
                children: (0, o.jsxs)("div", {
                  className: "col-12 d-block d-md-flex align-items-md-center",
                  children: [
                    (0, o.jsx)("div", {
                      className: "form-content d-none d-md-block",
                      children: (0, o.jsx)(c.Z, {
                        hometestimonialsdatalist: n.hometestimonialsdatalist,
                        setStep: i,
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: "d-block d-md-none mobile-title-cont",
                      onClick: () => p(),
                      children: (0, o.jsx)("div", {
                        className: "form-link main-link",
                        children: (0, o.jsx)(S(), {
                          src: "/images/gd-logo-mobile.png",
                          alt: "get distributers",
                          width: 274,
                          height: 50,
                        }),
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      children: [
                        "step1" === e &&
                          (0, o.jsx)(R, { setStep: i, setmobileinfo: r }),
                        "step2" === e &&
                          (0, o.jsx)(H, { setStep: i, mobileinfo: t }),
                        "step3" === e && (0, o.jsx)(B, { setStep: i }),
                        "step4" === e &&
                          (0, o.jsx)(H, { emailOtp: !0, setStep: i }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        M = a.ZP.div.withConfig({ componentId: "sc-b7e5e723-0" })($());
      var Q = i(8486);
      function J() {
        let n = (0, t.Z)([""]);
        return (
          (J = function () {
            return n;
          }),
          n
        );
      }
      let Y = (n) => {
        let { hometestimonialsdatalist: e } = (0, s.v9)(
          (n) => n.GDHomeApi.hometestimonialsApi
        );
        return (0, o.jsx)(nn, {
          children: (0, o.jsx)(q, { hometestimonialsdatalist: e }),
        });
      };
      Y.getInitialProps = Q.Y.getInitialPageProps((n) => async (e) => {
        n.dispatch({
          type: I.i4.GET_HOME_TESTIMONIALS_REQUEST,
          page_no: 1,
          limit: 10,
        }),
          e.req && (n.dispatch(r.uR), await n.sagaTask.toPromise());
      });
      var K = Y;
      let nn = a.ZP.div.withConfig({ componentId: "sc-3808163a-0" })(J());
    },
    2954: function (n, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return r;
        },
      });
      var t = i(7297),
        o = i(9521);
      function l() {
        let n = (0, t.Z)([
          '\n  /* &.minheight .slick-track {\n    min-height: 320px;\n  } */\n  /* Slider */\n  .slick-slider {\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .slick-list {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n  }\n  .slick-list:focus {\n    outline: none;\n  }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand;\n  }\n\n  .slick-slider .slick-track,\n  .slick-slider .slick-list {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  .slick-track {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    /* min-height: 320px; */\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n\n  .slick-track:before,\n  .slick-track:after {\n    display: table;\n\n    content: "";\n  }\n  .slick-track:after {\n    clear: both;\n  }\n  .slick-loading .slick-track {\n    visibility: hidden;\n  }\n\n  .slick-slide {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n  }\n  [dir="rtl"] .slick-slide {\n    float: right;\n  }\n  .slick-slide img {\n    display: block;\n  }\n  .slick-slide.slick-loading img {\n    display: none;\n  }\n  .slick-slide.dragging img {\n    pointer-events: none;\n  }\n  .slick-initialized .slick-slide {\n    display: block;\n  }\n  .slick-loading .slick-slide {\n    visibility: hidden;\n  }\n  .slick-vertical .slick-slide {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n  }\n  .slick-arrow.slick-hidden {\n    display: none;\n  }\n  .slick-prev,\n  .slick-next {\n    font-size: 0;\n    line-height: 0;\n\n    position: absolute;\n    top: 50%;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n\n    cursor: pointer;\n\n    color: transparent;\n    border: none;\n    outline: none;\n    background: transparent;\n  }\n  .slick-prev:hover,\n  .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    color: transparent;\n    outline: none;\n    background: transparent;\n  }\n  .slick-prev:hover:before,\n  .slick-prev:focus:before,\n  .slick-next:hover:before,\n  .slick-next:focus:before {\n    opacity: 1;\n  }\n  .slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25;\n  }\n\n  .slick-prev:before,\n  .slick-next:before {\n    /* font-family: "slick"; */\n    font-size: 20px;\n    line-height: 1;\n\n    opacity: 0.75;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .slick-prev {\n    left: -25px;\n  }\n  [dir="rtl"] .slick-prev {\n    right: -25px;\n    left: auto;\n  }\n  .slick-prev:before {\n    content: "←";\n  }\n  [dir="rtl"] .slick-prev:before {\n    content: "→";\n  }\n\n  .slick-next {\n    right: -25px;\n  }\n  [dir="rtl"] .slick-next {\n    right: auto;\n    left: -25px;\n  }\n  .slick-next:before {\n    content: "→";\n  }\n  [dir="rtl"] .slick-next:before {\n    content: "←";\n  }\n\n  /* Dots */\n  .slick-dotted.slick-slider {\n    margin-bottom: 30px;\n  }\n\n  .slick-dots {\n    position: absolute;\n    bottom: 23px;\n    left: 60px;\n\n    display: block;\n\n    width: auto;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n  }\n  .slick-dots li {\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 2px;\n    padding: 0;\n\n    cursor: pointer;\n  }\n  .slick-dots li button {\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 15px;\n    height: 15px;\n    padding: 10px 0;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n  }\n  .slick-dots li button:hover,\n  .slick-dots li button:focus {\n    outline: none;\n  }\n  .slick-dots li button:hover:before,\n  .slick-dots li button:focus:before {\n    opacity: 1;\n  }\n  .slick-dots li button:before {\n    /* font-family: \'slick\'; \n    font-size: 6px;\n    line-height: 20px;*/\n    -o-border-radius: 2px;\n    -ms-border-radius: 2px;\n    -moz-border-radius: 2px;\n    -webkit-border-radius: 2px;\n    border-radius: 2px;\n    position: absolute;\n    top: 8px;\n    left: 0;\n\n    width: 15px;\n    height: 2px;\n\n    content: "";\n    text-align: center;\n\n    /* opacity: .25; */\n    background-color: #d8d8d8;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .slick-dots li.slick-active button:before {\n    /* opacity: .75; */\n    background-color: #e1771a;\n    height: 3px;\n  }\n  #hmSlide .slick-slide {\n    /* width:82vw; */\n    /* width: 62vw; */\n  }\n  @media (max-width: 576px) {\n    #hmSlide .slick-slide {\n      width: 76vw;\n      height: 84px;\n    }\n  }\n  .slick-resp {\n    padding: 0 8px;\n  }\n  @media (min-width: 576px) {\n    .slick-resp {\n      padding: 0;\n    }\n  }\n',
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        let n = (0, t.Z)([
          "\n  .slick-slide .hide-center {\n    display: none;\n  }\n  .slick-center .hide-center {\n    display: block;\n  }\n  #testimonialStyle .slick-center section {\n    display: block !important;\n  }\n  #testimonialStyle .slick-dots {\n    position: static;\n  }\n  @media (min-width: 992px) {\n    #testimonialStyle .testiWrapCust {\n      transition: 0.2s ease-in-out;\n      -webkit-transform: scale(0.5);\n      -moz-transform: scale(0.5);\n      transform: scale(0.5);\n    }\n    #testimonialStyle .slick-center div.testiWrapCust {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      transform: scale(1);\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      let r = o.ZP.div.withConfig({ componentId: "sc-200a9a62-0" })(l());
      o.ZP.div.withConfig({ componentId: "sc-200a9a62-1" })(s());
    },
    2100: function (n, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return j;
        },
      });
      var t = i(7297),
        o = i(5893),
        l = i(5675),
        s = i.n(l),
        r = i(1163);
      i(7294);
      var a = i(1649),
        c = i(1475),
        d = i(9521),
        p = i(6066),
        m = i(2954);
      function h() {
        let n = (0, t.Z)([
          '\n  .sub-head {\n    font-family: "Ubuntu";\n  }\n  div.slick-slide {\n    width: calc(100vw - 54px);\n  }\n  button.slick-next,\n  button.slick-prev {\n    background-color: #fff;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: solid 1px #f35b04;\n    z-index: 2;\n    top: 60px;\n  }\n  button.slick-prev {\n    padding: 0 0 0 4px;\n    left: calc(100% - 5rem);\n    top: -3rem;\n  }\n  button.slick-next {\n    padding: 0 4px 0 0;\n    right: 0;\n    top: -3rem;\n  }\n\n  div.slick-slide > div {\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n  .slick-list {\n    margin: 0px -10px 0px -10px;\n  }\n  .slick-track {\n    margin-left: 0;\n  }\n  button.slick-prev:before,\n  button.slick-next:before {\n    content: "";\n    display: block;\n    margin: 0 auto;\n    width: 8px;\n    height: 8px;\n    border-right: solid 1px #f35b04;\n    border-top: solid 1px #f35b04;\n    transform: rotate(-135deg);\n  }\n  button.slick-next:before {\n    transform: rotate(45deg);\n  }\n  button.slick-next:hover,\n  button.slick-prev:hover {\n    background-color: #f35b04;\n  }\n  button.slick-prev:hover:before,\n  button.slick-next:hover:before {\n    border-color: #fff;\n  }\n  /* .slick-arrow {\n    display: none !important;\n  } */\n  .slick-slider:hover .slick-arrow {\n    display: block !important;\n  }\n  .heading {\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 24px;\n    color: #323a43;\n    font-family: "Urbanist";\n  }\n  @media screen and (min-width: 576px) {\n    .heading {\n      font-size: 32px;\n      line-height: 24px;\n    }\n    div.slick-slide {\n      width: inherit;\n    }\n    button.slick-arrow.slick-prev.slick-disabled,\n    button.slick-arrow.slick-next.slick-disabled {\n      border-color: #d7d7d7;\n    }\n    .slick-prev.slick-disabled:hover,\n    .slick-next.slick-disabled:hover {\n      background-color: white;\n    }\n    .slick-prev.slick-disabled:hover:before,\n    .slick-next.slick-disabled:hover:before {\n      border-color: #f35b04;\n    }\n  }\n',
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      let u = (n) => {
          let { className: e, children: i } = n;
          return (0, o.jsx)(m.X, {
            children: (0, o.jsxs)(x, {
              className: e,
              children: [
                (0, o.jsx)("div", { className: "mb-4", ref: n.refProp }),
                (0, o.jsx)(p.Z, {
                  dots: !0,
                  infinite: !1,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: !1,
                  autoplay: !1,
                  autoplaySpeed: 5e3,
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
        x = d.ZP.div.withConfig({ componentId: "sc-7971403f-0" })(h());
      var f = i(4681);
      function g() {
        let n = (0, t.Z)([
          '\n  .form-testimonial {\n    background: #8179cd;\n    border-radius: 32px;\n    padding: 26px;\n    position: relative;\n  }\n  .t-text {\n    font-family: "Ubuntu";\n    letter-spacing: 0.01em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n    margin-bottom: 20px;\n    color:white\n  }\n  .alphabet-cont {\n    width: 42px;\n    height: 42px;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px;\n    margin-right: 10px;\n    border: 1px solid #e7e7e7;\n    border-radius: 100%;\n    background:white;\n  }\n  .t-transform-u {\n    text-transform: uppercase;\n    color:white\n  }\n  .t-transform-c {\n    text-transform: capitalize;\n    color:white\n  }\n  .quotes-image {\n    position: absolute;\n    right: 26px;\n    bottom: 26px;\n  }\n',
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      let b = (n) => {
          var e, i, t, l;
          return (0, o.jsx)(v, {
            children: (0, o.jsxs)("div", {
              className: "form-testimonial",
              children: [
                (0, o.jsx)(f.$X, {
                  className: "Body3R t-text",
                  children:
                    null === (e = n.hometestimonialsdata) || void 0 === e
                      ? void 0
                      : e.msg,
                }),
                (0, o.jsxs)("div", {
                  className: "d-flex",
                  children: [
                    (0, o.jsx)("span", {
                      className: "alphabet-cont",
                      children:
                        null === (i = n.hometestimonialsdata) || void 0 === i
                          ? void 0
                          : i.co_name.slice(0, 1),
                    }),
                    (0, o.jsxs)("div", {
                      children: [
                        (0, o.jsx)(f.GV, {
                          className: "Body4R t-transform-u",
                          mfontWeight: 500,
                          dfontWeight: 500,
                          children:
                            null === (t = n.hometestimonialsdata) ||
                            void 0 === t
                              ? void 0
                              : t.co_name,
                        }),
                        (0, o.jsxs)(f.GV, {
                          className: "Body4R t-transform-c",
                          children: [
                            " ",
                            null === (l = n.hometestimonialsdata) ||
                            void 0 === l
                              ? void 0
                              : l.name,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("span", {
                  className: "quotes-image",
                  children: (0, o.jsx)(s(), {
                    src: "/images/icons/form-dbl-q.svg",
                    alt: "gd-form",
                    width: 54,
                    height: 40,
                  }),
                }),
              ],
            }),
          });
        },
        v = d.ZP.div.withConfig({ componentId: "sc-d74266b2-0" })(g());
      var k = i(9386);
      function y() {
        let n = (0, t.Z)([
          '\n\n  background: #3d348b;\n  border-radius: 32px;\n  padding: 60px 68px 82px 60px;\n  max-width: 660px;\n  .pointercur{\n    cursor:pointer;\n  }\n  .content-title {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 62px;\n    line-height: 68px;\n    color: #ffffff;\n  }\n  .content-desc {\n    font-family: "Urbanist";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 30px;\n    line-height: 36px;\n    color: #cbd5e0;\n    margin-bottom: 44px;\n  }\n',
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      let w = (n) => {
        var e, i;
        (0, r.useRouter)();
        let t = (0, a.I0)(),
          l = () => {
            t({ type: c.Ap.RESET_ALL_AUTH });
          };
        return (0, o.jsxs)(_, {
          children: [
            (0, o.jsx)(k.Z, {
              href: "\\",
              onClick: () => l(),
              className: "pointercur",
              children: (0, o.jsx)(s(), {
                src: "/images/form-gd-logo.png",
                alt: "gd logo",
                width: 274,
                height: 42,
                className: "mb-4",
              }),
            }),
            (0, o.jsxs)("div", {
              className: "content-title mb-3",
              children: [
                "Start your",
                (0, o.jsx)("br", {}),
                " Journey with us.",
              ],
            }),
            (0, o.jsx)("div", {
              className: "content-desc",
              children:
                "Discover the world best manufacturers and distributors",
            }),
            (0, o.jsx)(u, {
              children:
                (null === (e = n.hometestimonialsdatalist) || void 0 === e
                  ? void 0
                  : e.length) > 0 &&
                (null === (i = n.hometestimonialsdatalist) || void 0 === i
                  ? void 0
                  : i.map((n, e) =>
                      (0, o.jsx)(b, { hometestimonialsdata: n }, e)
                    )),
            }),
          ],
        });
      };
      var j = w;
      let _ = d.ZP.div.withConfig({ componentId: "sc-b11a6a03-0" })(y());
    },
  },
  function (n) {
    n.O(0, [157, 141, 66, 443, 837, 774, 888, 179], function () {
      return n((n.s = 9500));
    }),
      (_N_E = n.O());
  },
]);
