"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7992],
  {
    25952: function (e, t, n) {
      n.d(t, {
        h: function () {
          return m;
        },
        t: function () {
          return b;
        },
      });
      var i = n(4337),
        a = n(35250),
        r = n(95182),
        s = n.n(r),
        o = n(1454),
        l = n(21389);
      function c() {
        var e = (0, i._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, i._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, i._)(["flex-grow flex-shrink-0 tabular-nums"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, i._)([
          "text-xs inline-flex bg-token-surface-secondary h-8 border rounded border-token-border-medium",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, i._)([
          "text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-surface-tertiary",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, i._)([
          "text-token-text-tertiary px-2 flex items-center font-mono tracking-widest",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function m(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          i = e.length,
          r = e.className,
          l = function (e) {
            n(s()(t + e, 0, i - 1));
          };
        return (0, a.jsxs)(x, {
          className: r,
          children: [
            (0, a.jsx)(p, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, a.jsx)(o.YFh, { className: "icon-xs" }),
            }),
            (0, a.jsx)(v, { children: "".concat(t + 1, " / ").concat(i) }),
            (0, a.jsx)(p, {
              onClick: function () {
                return l(1);
              },
              disabled: t === i - 1,
              children: (0, a.jsx)(o.Tfp, { className: "icon-xs" }),
            }),
          ],
        });
      }
      var x = l.Z.div(c()),
        p = l.Z.button(d()),
        v = l.Z.span(u());
      function b(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          i = e.length,
          r = e.className,
          l = function (e) {
            n(s()(t + e, 0, i - 1));
          };
        return (0, a.jsxs)(j, {
          className: r,
          children: [
            (0, a.jsx)(y, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, a.jsx)(o.YFh, { className: "icon-sm" }),
            }),
            (0, a.jsx)(k, { children: "".concat(t + 1, "/").concat(i) }),
            (0, a.jsx)(y, {
              onClick: function () {
                return l(1);
              },
              disabled: t === i - 1,
              children: (0, a.jsx)(o.Tfp, { className: "icon-sm" }),
            }),
          ],
        });
      }
      var j = l.Z.div(f()),
        y = l.Z.button(h()),
        k = l.Z.span(g());
    },
    31731: function (e, t, n) {
      n.d(t, {
        m: function () {
          return s;
        },
      });
      var i = n(35250),
        a = n(98359),
        r = n(70079);
      function s(e) {
        var t = e.children;
        return (0, i.jsx)(a.u, {
          as: r.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: t,
        });
      }
    },
    50362: function (e, t, n) {
      n.d(t, {
        D2: function () {
          return T;
        },
        Vp: function () {
          return D;
        },
        ZP: function () {
          return P;
        },
        ze: function () {
          return B;
        },
      });
      var i = n(39324),
        a = n(70216),
        r = n(10064),
        s = n(4337),
        o = n(35250),
        l = n(26563),
        c = n(98359),
        d = n(57526),
        u = n(19841),
        f = n(70079),
        h = n(99581),
        g = n(1454),
        m = n(21389),
        x = n(1491),
        p = n(13246),
        v = n(35265),
        b = n(23234),
        j = n(59904),
        y = n(42798);
      function k() {
        var e = (0, s._)([
          "rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, s._)([
          "absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%] gizmo:min-w-[250px]",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = (0, s._)([
          "absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = (0, s._)(["flex items-center gap-2 truncate"]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function _() {
        var e = (0, s._)(["h-6 w-6 shrink-0"]);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, s._)([
          "absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, s._)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var T = ["confidential", "alpha", "plus"];
      function P(e) {
        var t = e.selectedOptions,
          n = e.selectedLabel,
          r = e.onChange,
          s = e.onAction,
          c = e.onOpen,
          d = e.onClose,
          u = e.dropdownRef,
          h = (0, a._)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "onOpen",
            "onClose",
            "dropdownRef",
          ]),
          g = (0, f.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var t = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == s || s(t);
              } else r(e);
            },
            [r, s]
          );
        return (0, o.jsx)(l.R, {
          value: t.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: g,
          children: function (e) {
            var a = e.open;
            return (0, o.jsx)(
              S,
              (0, i._)(
                {
                  ref: u,
                  selectedLabel: n || "".concat(t.length, " selected"),
                  open: a,
                  onOpen: c,
                  onClose: d,
                  multiple: !0,
                },
                h
              )
            );
          },
        });
      }
      var S = (0, f.forwardRef)(function (e, t) {
        var n = e.name,
          i = e.selectedLabel,
          a = e.open,
          r = e.options,
          s = e.actions,
          m = e.multiple,
          k = e.isLoading,
          w = e.loadingState,
          C = e.header,
          M = e.onOpen,
          _ = e.onClose,
          A = e.theme,
          N = (0, f.useRef)(null),
          T = (0, f.useRef)(null),
          P = (0, x.oc)(),
          S = (0, b.Ml)();
        (0, f.useImperativeHandle)(
          t,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = N.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = N.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var B = k
          ? w ||
            (0, o.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, o.jsx)(y.Z, {}),
            })
          : (0, o.jsxs)(o.Fragment, {
              children: [
                C,
                (0, o.jsxs)(l.R.Options, {
                  className: "overflow-auto",
                  children: [
                    r.map(function (e, t) {
                      return (0, o.jsx)(
                        I,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          theme: A,
                          children: function (t) {
                            var n = t.selected,
                              i = t.active;
                            return (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsxs)(F, {
                                  children: [
                                    e.imageUrl &&
                                      (0, o.jsx)(H, {
                                        children: (0, o.jsx)(p.Z, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: "100%",
                                        }),
                                      }),
                                    (0, o.jsxs)("span", {
                                      className: (0, u.default)(
                                        n && !m && "font-semibold",
                                        "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return D(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                m && !e.disabled
                                  ? (0, o.jsx)(z, { theme: A, selected: n })
                                  : n &&
                                    (0, o.jsx)(Z, {
                                      theme: A,
                                      icon: "mini" === A ? j.HQ : g.UgA,
                                    }),
                                e.disabled &&
                                  (0, o.jsx)(Z, {
                                    theme: A,
                                    icon: d.Z,
                                    className: "text-red-700 dark:text-red-500",
                                  }),
                                i &&
                                  P &&
                                  (0, h.createPortal)(
                                    (0, o.jsx)(L, {
                                      option: e,
                                      dropdownRef: T,
                                    }),
                                    document.body
                                  ),
                              ],
                            });
                          },
                        },
                        t
                      );
                    }),
                    null == s
                      ? void 0
                      : s.map(function (e, t) {
                          return (0, o.jsx)(
                            I,
                            {
                              value: e.id,
                              theme: A,
                              children: function () {
                                return (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    (0, o.jsx)("div", {
                                      className:
                                        "text-gray-800 dark:text-gray-100",
                                      children: e.label,
                                    }),
                                    (0, o.jsx)(Z, { theme: A, icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            t
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        o.jsxs)("div", { className: "relative w-full gizmo:w-fit md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, o.jsxs)(l.R.Button, { ref: N, onClick: a ? _ : M, className: (0, u.default)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left gizmo:text-[15px] gizmo:font-normal dark:bg-gray-800 sm:text-sm", "mini" === A ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 gizmo:border-black/10 gizmo:hover:border-black dark:hover:border-white/10 gizmo:dark:border-white/20 gizmo:dark:hover:border-white" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"), children: ["mini" !== A && (0, o.jsx)(l.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: n }), (0, o.jsx)("span", { className: "inline-flex w-full truncate", children: (0, o.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: i }) }), (0, o.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: S ? (0, o.jsx)(v.ud, {}) : (0, o.jsx)(g.bTu, { className: "icon-sm text-gray-400", "aria-hidden": "true" }) })] }), (0, o.jsx)(c.u, { show: a, as: f.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, o.jsx)(E, { ref: T, children: B }) })] });
      });
      function I(e) {
        var t = e.value,
          n = e.disabled,
          i = e.children,
          a = e.theme;
        return (0, o.jsx)(l.R.Option, {
          className: function (e) {
            var t = e.active;
            return (0, u.default)(
              "mini" === a ? O : U,
              t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              n &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: t,
          children: i,
        });
      }
      function Z(e) {
        var t = e.icon,
          n = e.className,
          i = e.theme;
        return (0, o.jsx)("mini" === i ? V : q, {
          children: (0, o.jsx)(t, {
            className: (0, u.default)("icon-md", n),
            "aria-hidden": "true",
          }),
        });
      }
      function z(e) {
        var t = e.selected,
          n = e.disabled;
        if ("mini" === e.theme) {
          var i = (0, u.default)(
            "h-5 w-5 text-blue-600",
            t ? "stroke-[2.5]" : "stroke-2"
          );
          return (0, o.jsxs)(V, {
            children: [
              t
                ? (0, o.jsx)(j.HQ, { className: i })
                : (0, o.jsx)(j.i9, { className: i }),
              !t &&
                (0, o.jsx)(j.nQ, {
                  className: (0, u.default)(
                    "icon-md absolute text-blue-600 opacity-0 transition-opacity",
                    !n && "group-hover:opacity-100"
                  ),
                }),
            ],
          });
        }
        return (0, o.jsx)(q, {
          children: (0, o.jsx)("div", {
            className: (0, u.default)(
              "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
              t
                ? "border-transparent bg-green-600 text-white"
                : "border-black/5 dark:border-white/20"
            ),
            "aria-hidden": "true",
            children: (0, o.jsx)(g.UgA, {
              className: (0, u.default)(
                "h-3 w-3 transition-opacity",
                t && "opacity-100",
                !t && "opacity-0",
                !t && !n && "group-hover:opacity-50"
              ),
              strokeWidth: t ? 2.5 : 2,
            }),
          }),
        });
      }
      function B(e) {
        var t = e.showCheckbox,
          n = e.theme;
        return (0, o.jsxs)("div", {
          className: (0, u.default)("mini" === n ? O : U, "cursor-auto"),
          children: [
            (0, o.jsxs)(F, {
              children: [
                (0, o.jsx)(H, {
                  children: (0, o.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            t && (0, o.jsx)(z, { theme: n, selected: !1, disabled: !0 }),
          ],
        });
      }
      function L(e) {
        var t = e.option,
          n = e.dropdownRef,
          i = (0, r._)((0, f.useState)(), 2),
          a = i[0],
          s = i[1];
        return ((0, f.useEffect)(
          function () {
            var e = function () {
              if (n.current) {
                var e = n.current.getBoundingClientRect();
                s({ top: e.top, left: e.left - 260, minHeight: e.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [n]
        ),
        a)
          ? (0, o.jsxs)(G, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                t.disabled &&
                  (0, o.jsx)(d.Z, {
                    className: "icon-lg text-red-700 dark:text-red-500",
                  }),
                t.imageUrl &&
                  (0, o.jsx)(p.Z, { url: t.imageUrl, name: t.title, size: 70 }),
                (0, o.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    t.title,
                    " ",
                    t.tags.map(function (e) {
                      return D(e);
                    }),
                    " ",
                    t.customTags,
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: t.description,
                }),
              ],
            })
          : null;
      }
      var D = function (e) {
          return (
            T.includes(e) &&
            (0, o.jsx)(
              "span",
              {
                className: (0, u.default)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-blue-500",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        R = m.Z.div(k()),
        E = (0, m.Z)(R)(w()),
        G = (0, m.Z)(R)(C()),
        O =
          "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
        U =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        F = m.Z.span(M()),
        H = m.Z.span(_()),
        V = m.Z.span(A()),
        q = m.Z.span(N());
    },
    61802: function (e, t, n) {
      n.d(t, {
        B: function () {
          return eB;
        },
      });
      var i = n(39324),
        a = n(10064),
        r = n(4337),
        s = n(35250),
        o = n(32148),
        l = n(33554),
        c = n(44539),
        d = n(77421),
        u = n(62853),
        f = n(97296),
        h = n(10721),
        g = n(70079),
        m = n(70671),
        x = n(32004),
        p = n(94968),
        v = n(40803),
        b = n(51505),
        j = n(55548),
        y = n(17944),
        k = n(25687),
        w = n(13246),
        C = n(6013),
        M = function (e) {
          var t = e.children,
            n = e.contentClassName,
            i = e.content,
            r = e.side,
            o = e.sideOffset,
            l = (0, a._)((0, g.useState)(void 0), 2),
            c = l[0],
            d = l[1],
            u = function () {
              d(!0);
            },
            f = function () {
              d(void 0);
            };
          return (0, s.jsxs)(C.fC, {
            open: c,
            onOpenChange: function (e) {
              d(!0 === e || void 0);
            },
            children: [
              (0, s.jsx)(C.xz, {
                asChild: !0,
                onMouseEnter: u,
                onMouseLeave: f,
                children: t,
              }),
              (0, s.jsx)(C.h_, {
                children: (0, s.jsx)(C.VY, {
                  onMouseEnter: u,
                  onMouseLeave: f,
                  side: r,
                  sideOffset: o,
                  collisionPadding: 16,
                  className: n,
                  onOpenAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  onCloseAutoFocus: function (e) {
                    e.preventDefault();
                  },
                  children: i,
                }),
              }),
            ],
          });
        },
        _ = n(59904),
        A = n(86585),
        N = n(50362),
        T = n(73780),
        P = n(62682),
        S = n(1454),
        I = n(18481),
        Z = n(47428),
        z = n(88903),
        B = n(39368),
        L = n(70496);
      function D(e) {
        var t = e.icon,
          n = e.label,
          i = e.onSelect;
        return (0, s.jsxs)(Z.ck, {
          onSelect: i,
          className:
            "flex cursor-pointer select-none items-center gap-3 px-4 py-2 text-sm text-token-text-secondary outline-none radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
          children: [
            (0, s.jsx)(t, { className: "icon-sm" }),
            (0, s.jsx)("span", { children: n }),
          ],
        });
      }
      function R(e) {
        var t = e.conversationTemplate,
          n = (0, y.ec)(y.F_.accountUserId),
          i = t.owner_id === n,
          a = (0, h.useRouter)(),
          r = (0, y.hz)().has("debug"),
          o = (0, I.xj)(t.id);
        return (0, s.jsxs)(Z.fC, {
          children: [
            (0, s.jsx)(Z.xz, {
              asChild: !0,
              children: (0, s.jsxs)("button", {
                className:
                  "flex min-w-[256px] items-center gap-4 overflow-hidden rounded p-2 text-left hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-gray-700 dark:radix-state-open:bg-gray-700 lg:-ml-2",
                children: [
                  (0, s.jsx)(z.Py, { conversationTemplate: t }),
                  (0, s.jsxs)("div", {
                    className: "grow",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "text-sm font-medium text-token-text-primary",
                        children: t.name,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center gap-1 text-xs text-token-text-tertiary",
                        children: [
                          (0, s.jsxs)("span", {
                            children: ["Template by ", t.author_name],
                          }),
                          null != t.published_at
                            ? null != t.description
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)("span", { children: "•" }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "max-w-[160px] overflow-hidden overflow-ellipsis whitespace-nowrap",
                                      children: t.description,
                                    }),
                                  ],
                                })
                              : null
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("span", { children: "•" }),
                                  (0, s.jsx)("span", { children: "Private" }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(S.bTu, {
                    className: "icon-sm text-token-text-tertiary",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(Z.Uv, {
              children: (0, s.jsxs)(Z.VY, {
                className:
                  "min-w-[256px] max-w-[320px] rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
                align: "start",
                side: "bottom",
                sideOffset: 4,
                children: [
                  (0, s.jsxs)(Z.__, {
                    className:
                      "border-b border-gray-200 p-4 dark:border-gray-700",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "text-sm font-medium text-token-text-primary",
                        children: t.name,
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "mt-1 flex items-center gap-1 text-xs text-token-text-tertiary",
                        children:
                          null != t.published_at
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(S._rq, { className: "icon-xs" }),
                                  (0, s.jsx)("span", {
                                    children: "Published in workspace",
                                  }),
                                ],
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(S.UIZ, { className: "icon-xs" }),
                                  (0, s.jsxs)("span", {
                                    children: [
                                      "Private",
                                      i &&
                                        (0, s.jsx)("span", {
                                          children: " (Only visible to you)",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                      }),
                      null != t.published_at &&
                        null != t.description &&
                        (0, s.jsx)("div", {
                          className:
                            "mt-1 text-xs text-token-text-secondary line-clamp-3",
                          children: t.description,
                        }),
                    ],
                  }),
                  (0, s.jsxs)(Z.ZA, {
                    className: "py-1",
                    children: [
                      (0, s.jsx)(D, {
                        icon: S.IC0,
                        label: "New chat with this template",
                        onSelect: function () {
                          a.push((0, B.l1)(t.id), void 0, { shallow: !0 });
                        },
                      }),
                      i
                        ? (0, s.jsx)(D, {
                            icon: S.IYd,
                            label: "Edit template",
                            onSelect: function () {
                              a.push(o, void 0, { shallow: !0 });
                            },
                          })
                        : (0, s.jsx)(D, {
                            icon: S.rDJ,
                            label: "See how it's made",
                            onSelect: function () {
                              (0, L.O)(t.id);
                            },
                          }),
                      r &&
                        (0, s.jsx)(D, {
                          icon: S.cDN,
                          label: "Debug",
                          onSelect: function () {
                            return j.vm.toggleActiveSidebar("debug");
                          },
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function E(e) {
        var t = e.workspaceId,
          n = e.conversationTemplateId,
          i = (0, B.GS)(t, n, { includeDeleted: !0 }).data;
        return (0, s.jsx)("div", {
          className:
            "flex min-h-[60px] justify-center border-b border-gray-100 dark:border-gray-700",
          children: (0, s.jsx)("div", {
            className:
              "flex w-full items-center px-2 md:max-w-2xl lg:max-w-[38rem] lg:px-0 xl:max-w-3xl",
            children:
              null != i ? (0, s.jsx)(R, { conversationTemplate: i }) : null,
          }),
        });
      }
      var G = n(74329),
        O = n(15635),
        U = n(71209),
        F = n(70216),
        H = n(48133),
        V = n(23211),
        q = n(21950),
        K = n(35265),
        W = n(10943),
        Y = n(80275),
        Q = n(27382),
        J = n(59517),
        X = n(97631),
        $ = n(10499),
        ee = n(28924),
        et = n(1491),
        en = n(54636),
        ei = n(42780),
        ea = n(19841),
        er = n(33377),
        es = n(46266),
        eo = n(21722),
        el = n(64502),
        ec = n(38104),
        ed = n(94705),
        eu = n(7184),
        ef = n(30769);
      function eh(e) {
        var t = e.className,
          n = (0, F._)(e, ["className"]);
        return (0, s.jsx)(
          "textarea",
          (0, i._)(
            {
              className: (0, ea.default)(
                "form-textarea w-full rounded-lg border border-token-border-light bg-token-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",
                t
              ),
            },
            n
          )
        );
      }
      var eg = n(61236);
      function em(e) {
        var t = e.reasons,
          n = e.onSelectReason;
        return (0, s.jsx)("div", {
          className:
            "divide-y overflow-hidden rounded-md border border-token-border-medium",
          children: t.map(function (e) {
            return (0, s.jsx)(
              "button",
              {
                onClick: function () {
                  n(e);
                },
                className:
                  "w-full border-token-border-medium p-2 text-left text-sm hover:bg-token-surface-secondary",
                children: e.cta,
              },
              e.id
            );
          }),
        });
      }
      function ex(e) {
        var t = e.reason,
          n = e.submitReport,
          i = (0, a._)((0, g.useState)(""), 2),
          r = i[0],
          o = i[1],
          l = (0, a._)((0, g.useState)(!1), 2),
          c = l[0],
          d = l[1];
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(eh, {
              value: r,
              onChange: function (e) {
                return o(e.target.value);
              },
              placeholder: t.details_placeholder,
              autoFocus: !0,
            }),
            (0, s.jsx)("div", {
              className: "mt-1 flex justify-end",
              children: (0, s.jsx)(H.z, {
                onClick: function () {
                  try {
                    d(!0), n(t.id, r);
                  } finally {
                    d(!1);
                  }
                },
                disabled: c,
                children: "Submit report",
              }),
            }),
          ],
        });
      }
      function ep(e) {
        var t = e.reason;
        return (0, s.jsxs)("div", {
          className: "text-sm",
          children: [
            (0, s.jsx)("div", {
              className: "mb-2",
              children: t.link_explanation,
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsx)("a", {
                href: t.link_attachment,
                target: "_blank",
                rel: "noreferrer",
                className: "break-words underline",
                children: t.link_attachment,
              }),
            }),
          ],
        });
      }
      function ev(e) {
        var t,
          n,
          i = e.gizmoId,
          r = (0, eg.a)({
            queryKey: ["gizmoReportReasons"],
            queryFn: function () {
              return ef.U.getGizmoReportReasons();
            },
          }).data,
          o = (0, a._)((0, g.useState)([]), 2),
          l = o[0],
          c = o[1],
          d = (0, a._)((0, g.useState)(!1), 2),
          u = d[0],
          f = d[1];
        if (null == r) return null;
        var h = r.reasons,
          m = !0,
          x = !1,
          p = void 0;
        try {
          for (
            var v, b, j = l[Symbol.iterator]();
            !(m = (b = j.next()).done);
            m = !0
          )
            !(function () {
              var e = b.value;
              h = (v = h.find(function (t) {
                return t.id === e;
              })).sub_reasons;
            })();
        } catch (e) {
          (x = !0), (p = e);
        } finally {
          try {
            m || null == j.return || j.return();
          } finally {
            if (x) throw p;
          }
        }
        function y(e, t) {
          return k.apply(this, arguments);
        }
        function k() {
          return (k = (0, eo._)(function (e, t) {
            return (0, ec.Jh)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, ef.U.postGizmoReport(i, { id: e, details: t })];
                case 1:
                  return n.sent(), f(!0), [2];
              }
            });
          })).apply(this, arguments);
        }
        return u
          ? (0, s.jsx)("div", {
              children: (0, s.jsx)("div", {
                className: "pb-4 text-sm",
                children: "You report has been submitted. Thank you.",
              }),
            })
          : ((n =
              (null == v ? void 0 : v.details_placeholder) != null
                ? (0, s.jsx)(ex, { reason: v, submitReport: y })
                : (null == v ? void 0 : v.link_attachment) != null
                ? (0, s.jsx)(ep, { reason: v })
                : (0, s.jsx)(em, {
                    reasons: h,
                    onSelectReason:
                      ((t = (0, eo._)(function (e) {
                        return (0, ec.Jh)(this, function (t) {
                          return (
                            0 === e.sub_reasons.length &&
                            null == e.details_placeholder &&
                            null == e.link_attachment
                              ? y(e.id)
                              : c(function (t) {
                                  return (0, el._)(t).concat([e.id]);
                                }),
                            [2]
                          );
                        });
                      })),
                      function (e) {
                        return t.apply(this, arguments);
                      }),
                  })),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "text-sm font-medium",
                      children: r.header,
                    }),
                    (0, s.jsx)("div", {
                      className: "text-sm text-token-text-secondary",
                      children: r.header_explanation,
                    }),
                  ],
                }),
                null != v
                  ? (0, s.jsx)("div", {
                      className: "mb-2 flex gap-1 text-sm",
                      children: (0, s.jsxs)("button", {
                        onClick: function () {
                          c(function (e) {
                            return e.slice(0, -1);
                          });
                        },
                        className: "flex items-center gap-2 p-1",
                        children: [
                          (0, s.jsx)(S.YFh, {}),
                          (0, s.jsx)("div", { children: v.cta }),
                        ],
                      }),
                    })
                  : null,
                n,
              ],
            }));
      }
      function eb(e) {
        var t = e.gizmoId,
          n = e.onClose,
          i = (0, q.b9)(t).data;
        return (0, s.jsx)(eu.Z, {
          title: null != i ? "Report ".concat(i.name) : "Report",
          isOpen: !0,
          onClose: n,
          closeButton: (0, s.jsx)(ed.ZP.CloseButton, { onClose: n }),
          type: "success",
          children: (0, s.jsx)(ev, { gizmoId: t }),
        });
      }
      var ej = function (e) {
        var t = e.clientThreadId,
          n = (0, y.hz)().has("debug"),
          i = b.tQ.getServerThreadId(t),
          a = (0, T.C)(P.L0.WorkspaceShareLinks);
        return (0, s.jsxs)("div", {
          className: "flex gap-2 pr-1",
          children: [
            a &&
              i &&
              (0, s.jsx)(W.y4, {
                onClick: function () {
                  return j.vm.openSharingModal(i);
                },
                children: (0, s.jsx)(K.Gp, { className: "icon-md" }),
              }),
            n &&
              (0, s.jsx)(W.y4, {
                onClick: function () {
                  return j.vm.toggleActiveSidebar("debug");
                },
                children: (0, s.jsx)(K.WP, { className: "icon-md" }),
              }),
          ],
        });
      };
      function ey(e) {
        var t,
          n = e.clientThreadId,
          i = e.gizmoId,
          r = (0, j.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          o = (0, et.w$)(),
          l = (0, h.useRouter)(),
          c = (0, q.b9)(i).data,
          d = (0, a._)((0, g.useState)(!1), 2),
          u = d[0],
          f = d[1];
        return null == c
          ? null
          : (0, s.jsxs)(W.QT, {
              children: [
                u &&
                  (0, s.jsx)(eb, {
                    gizmoId: i,
                    onClose: function () {
                      f(!1);
                    },
                  }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    o &&
                      r &&
                      (0, s.jsx)(W.y4, {
                        className: "ml-2",
                        onClick: function () {
                          l.push(null != c ? (0, q.m_)(c) : "/", void 0, {
                            shallow: !0,
                          });
                        },
                        children: (0, s.jsx)(K.ks, {
                          className: "icon-md text-black dark:text-white",
                        }),
                      }),
                    (0, s.jsx)(es.Z, {
                      gizmoTemplate: c,
                      showReportModal: function () {
                        f(!0);
                      },
                      children: (0, s.jsxs)("div", {
                        className: eA,
                        children: [
                          c.name,
                          (null === (t = c.config.tags) || void 0 === t
                            ? void 0
                            : t.includes(Y.U9.Beta)) &&
                            (0, s.jsx)("div", {
                              className:
                                "rounded-full bg-gray-100 px-1.5 text-xs text-token-text-primary dark:bg-gray-900",
                              children: "Beta",
                            }),
                          (0, s.jsx)(eN, {}),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(ej, { clientThreadId: n }),
              ],
            });
      }
      function ek(e) {
        var t,
          n,
          a,
          r,
          o = e.currentModelConfig,
          l = e.clientThreadId,
          c = (0, h.useRouter)(),
          d = !b.tQ.getServerThreadId(l),
          u = (0, ee.ZP)(),
          f = null == o ? void 0 : o.id,
          m = u.find(function (e) {
            return e.categoryId === ee.ft.GPT4;
          }),
          p =
            null == m
              ? void 0
              : m.options.find(function (e) {
                  var t;
                  return (
                    e.name ===
                    (null === (t = ee.Er[ee.dN.PLUGINS]) || void 0 === t
                      ? void 0
                      : t.name)
                  );
                }),
          v = u.find(function (e) {
            return e.categoryId === ee.ft.GPT3_5;
          }),
          k = u.find(function (e) {
            return e.categoryId === ee.ft.OTHER;
          }),
          w = u.find(function (e) {
            return e.categoryId === ee.ft.EXPERIMENTS;
          }),
          C =
            f === (null == m ? void 0 : m.value)
              ? ee.ft.GPT4
              : f === (null == v ? void 0 : v.value)
              ? ee.ft.GPT3_5
              : (null == p ? void 0 : p.value) === f
              ? "plugins"
              : (null == k
                  ? void 0
                  : k.options.find(function (e) {
                      return e.value === f;
                    })) != null
              ? ee.ft.OTHER
              : (null == w
                  ? void 0
                  : w.options.find(function (e) {
                      return e.value === f;
                    })) != null
              ? ee.ft.EXPERIMENTS
              : null,
          M = (0, y.m0)(),
          _ = "plugins" === C,
          A =
            (null == k
              ? void 0
              : null === (t = k.options) || void 0 === t
              ? void 0
              : t.length) && k.options.length > 0,
          N =
            (null == w
              ? void 0
              : null === (n = w.options) || void 0 === n
              ? void 0
              : n.length) && w.options.length > 0,
          T =
            C === ee.ft.GPT4
              ? "4"
              : C === ee.ft.GPT3_5
              ? "3.5"
              : _
              ? "Plugins"
              : C === ee.ft.OTHER
              ? null !== (a = null == k ? void 0 : k.name) && void 0 !== a
                ? a
                : ""
              : C === ee.ft.EXPERIMENTS &&
                null !== (r = null == w ? void 0 : w.name) &&
                void 0 !== r
              ? r
              : "",
          P = function (e) {
            return (0, s.jsx)("div", {
              className: "flex shrink-0 grow justify-between gap-2",
              children: (0, s.jsxs)("div", {
                className: "flex gap-2",
                children: [
                  (0, s.jsx)(K.Gi, { className: "icon-md" }),
                  e,
                  " Models",
                ],
              }),
            });
          },
          S = (0, j.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          }),
          I = (0, et.w$)(),
          z = (0, J.tS)(function (e) {
            return {
              setShowAccountPaymentModal: e.setShowAccountPaymentModal,
              showAccountPaymentModal: e.showAccountPaymentModal,
            };
          }).setShowAccountPaymentModal,
          B = (0, g.useCallback)(
            function () {
              en.A.logEvent(ei.M.openModalAccountPaymentfromModelPicker, {
                content: "gizmo-button",
              }),
                z(!0);
            },
            [z]
          );
        return (0, s.jsxs)(W.QT, {
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                I &&
                  S &&
                  (0, s.jsx)(W.y4, {
                    className: "ml-2",
                    onClick: function () {
                      c.push("/", void 0, { shallow: !0 });
                    },
                    children: (0, s.jsx)(K.ks, {
                      className: "text-black dark:text-white",
                    }),
                  }),
                (0, s.jsxs)(Z.fC, {
                  children: [
                    (0, s.jsx)(Z.xz, {
                      asChild: !0,
                      children: (0, s.jsxs)("div", {
                        className: eA,
                        title:
                          C === ee.ft.EXPERIMENTS || C === ee.ft.OTHER
                            ? o.title
                            : void 0,
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              V.D,
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-token-text-secondary",
                                children: T,
                              }),
                            ],
                          }),
                          (0, s.jsx)(eN, {}),
                        ],
                      }),
                    }),
                    (0, s.jsx)(Z.Uv, {
                      children: (0, s.jsxs)(Z.VY, {
                        className:
                          "mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                        align: "start",
                        children: [
                          m &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(eM, {
                                  value: m.value,
                                  name: (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsxs)("div", {
                                      className: "flex gap-2",
                                      children: [
                                        (0, s.jsx)(K.HV, {
                                          className: "icon-md shrink-0",
                                        }),
                                        (0, s.jsxs)("div", {
                                          children: [
                                            "GPT-4",
                                            (0, s.jsx)("div", {
                                              className:
                                                "text-token-text-tertiary",
                                              children: (0, s.jsx)(
                                                x.Z,
                                                (0, i._)(
                                                  {},
                                                  eT.gpt4ShortExplainer
                                                )
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  isSelected: f === m.value,
                                  isNewThread: d,
                                }),
                                (0, s.jsx)(W.Cl, {}),
                              ],
                            }),
                          v &&
                            (0, s.jsx)(eM, {
                              value: v.value,
                              name: (0, s.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                  (0, s.jsx)(K.PK, { className: "icon-md" }),
                                  (0, s.jsxs)("div", {
                                    children: [
                                      "GPT-3.5",
                                      (0, s.jsx)("div", {
                                        className: "text-token-text-tertiary",
                                        children: (0, s.jsx)(
                                          x.Z,
                                          (0, i._)({}, eT.gpt35ShortExplainer)
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              isSelected: f === v.value,
                              isNewThread: d,
                            }),
                          !M &&
                            !m &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(Q.R, {}),
                                (0, s.jsx)(eM, {
                                  value: "",
                                  onClick: function () {
                                    B();
                                  },
                                  name: (0, s.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [
                                      (0, s.jsx)(K.HV, {
                                        className: "icon-md shrink-0",
                                      }),
                                      (0, s.jsxs)("div", {
                                        children: [
                                          "GPT-4",
                                          (0, s.jsxs)("div", {
                                            className:
                                              "text-token-text-tertiary",
                                            children: [
                                              (0, s.jsx)(
                                                x.Z,
                                                (0, i._)(
                                                  {},
                                                  eT.gpt4UpsellExplainer
                                                )
                                              ),
                                              (0, s.jsx)("div", {
                                                className: "mt-2",
                                                children: (0, s.jsx)(H.z, {
                                                  onClick: function () {
                                                    B();
                                                  },
                                                  color: "primary",
                                                  className:
                                                    "w-full !bg-brand-purple text-xs hover:bg-brand-purple hover:brightness-90",
                                                  children: (0, s.jsx)(
                                                    x.Z,
                                                    (0, i._)({}, eT.userUpgrade)
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  isSelected: !1,
                                  isNewThread: !0,
                                }),
                              ],
                            }),
                          ((null != A ? A : N) || p) && (0, s.jsx)(W.Cl, {}),
                          null != p &&
                            (0, s.jsx)(eM, {
                              value: p.value,
                              name: (0, s.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                  (0, s.jsx)(K.TC, { className: "icon-md" }),
                                  p.name,
                                ],
                              }),
                              isSelected: _,
                              isNewThread: d,
                            }),
                          d && A
                            ? (0, s.jsxs)(Z.Tr, {
                                children: [
                                  (0, s.jsx)(e_, {
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex grow justify-between gap-2 overflow-hidden",
                                      children: [
                                        P(k.name),
                                        C === ee.ft.OTHER &&
                                          (0, s.jsx)("div", {
                                            className:
                                              "truncate text-token-text-tertiary",
                                            children: o.title,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(ew, {
                                    currentModel: o,
                                    categoryOptions: k.options,
                                  }),
                                ],
                              })
                            : null,
                          d && N
                            ? (0, s.jsxs)(Z.Tr, {
                                children: [
                                  (0, s.jsx)(e_, {
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex grow justify-between gap-2 overflow-hidden",
                                      children: [
                                        P(w.name),
                                        C === ee.ft.EXPERIMENTS &&
                                          (0, s.jsx)("div", {
                                            className:
                                              "truncate text-token-text-tertiary",
                                            children: o.title,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)(ew, {
                                    currentModel: o,
                                    categoryOptions: w.options,
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                }),
                _ && (0, s.jsx)(er.Z, { theme: "mini" }),
              ],
            }),
            (0, s.jsx)(ej, { clientThreadId: l }),
          ],
        });
      }
      function ew(e) {
        var t = e.currentModel,
          n = e.categoryOptions,
          i = null == t ? void 0 : t.id;
        return (0, s.jsx)(Z.Uv, {
          children: (0, s.jsx)(Z.tu, {
            className:
              "mt-2 max-h-[calc(100vh-300px)] min-w-[100px] max-w-xs overflow-auto rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",
            sideOffset: -10,
            alignOffset: -10,
            children: n.map(function (e) {
              return (0,
              s.jsx)(eC, { option: e, isSelected: i === e.value }, e.value);
            }),
          }),
        });
      }
      function eC(e) {
        var t = e.option,
          n = e.isSelected;
        return (0, s.jsx)(eM, { isSelected: n, value: t.value, name: t.name });
      }
      function eM(e) {
        var t = e.value,
          n = e.name,
          i = e.isSelected,
          a = e.isNewThread,
          r = void 0 === a || a,
          o = e.onClick,
          l = (0, $.fm)(!r),
          c = (0, X.xT)();
        return (0, s.jsx)(
          W.UA,
          {
            onClick: function () {
              o ? o() : t && (l(t), c(t));
            },
            className: (0, ea.default)("!pr-3", i && "!opacity-100"),
            children: (0, s.jsxs)("div", {
              className: "flex grow items-start justify-between gap-2",
              children: [
                (0, s.jsx)("div", { children: n }),
                i &&
                  (0, s.jsx)(K.p9, {
                    className: (0, ea.default)(
                      "icon-md",
                      !r && "block group-hover:hidden"
                    ),
                  }),
                !r &&
                  (0, s.jsxs)("div", {
                    className:
                      "hidden text-token-text-primary group-hover:flex",
                    children: [
                      (0, s.jsx)("div", {
                        className: "absolute right-11",
                        children: "New Chat",
                      }),
                      " ",
                      (0, s.jsx)(K.ks, { className: "icon-md" }),
                    ],
                  }),
              ],
            }),
          },
          t
        );
      }
      var e_ = function (e) {
          var t = e.children,
            n = e.className,
            a = (0, F._)(e, ["children", "className"]);
          return (0, s.jsxs)(
            W.tc,
            (0, U._)(
              (0, i._)(
                {
                  $as: Z.fF,
                  className: (0, ea.default)(
                    "!gap-1 !pr-3 radix-state-open:bg-token-border-light",
                    n
                  ),
                },
                a
              ),
              {
                children: [
                  t,
                  (0, s.jsx)("div", {
                    className:
                      "ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",
                    children: (0, s.jsx)(S.Tfp, { className: "icon-md " }),
                  }),
                ],
              }
            )
          );
        },
        eA =
          "group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20",
        eN = function () {
          return (0, s.jsx)(K.ud, { className: "text-token-text-tertiary" });
        },
        eT = (0, p.vU)({
          gpt35ShortExplainer: {
            defaultMessage: "Great for everyday tasks",
            id: "ModelSwitcher.gpt35ShortExplainer",
            description: "Short description of GPT-3.5",
          },
          gpt4ShortExplainer: {
            defaultMessage: "With DALL\xb7E, browsing and analysis",
            id: "ModelSwitcher.gpt4ShortExplainer",
            description: "Short description of GPT-4",
          },
          gpt4UpsellExplainer: {
            id: "ModelSwitcher.gpt4Upsell",
            defaultMessage:
              "Our smartest and most capable model. Includes DALL\xb7E, browsing and more.",
            description: "Description of what new capabilities GPT4 providers",
          },
          userUpgrade: {
            id: "ModelSwithcer.upgradeButton",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade CTA for free users",
          },
        }),
        eP = n(23234),
        eS = n(11547);
      function eI() {
        var e = (0, r._)(["translateY(", ")"]);
        return (
          (eI = function () {
            return e;
          }),
          e
        );
      }
      var eZ = [0, 60],
        ez = function (e) {
          var t = e.clientThreadId,
            n = (0, m.Z)(),
            i = null !== (0, g.useContext)(k.gB),
            a = b.tQ.getServerThreadId(t),
            r = (0, T.C)(P.L0.WorkspaceShareLinks);
          return !i && void 0 !== a && r
            ? (0, s.jsx)(O.u, {
                side: "left",
                label: n.formatMessage(eE.shareChat),
                children: (0, s.jsx)(G.O, {
                  onClick: function () {
                    return j.vm.openSharingModal(a);
                  },
                  "aria-label": n.formatMessage(eE.shareChat),
                  children: (0, s.jsx)(S.A8q, { className: "icon-sm" }),
                }),
              })
            : null;
        };
      function eB(e) {
        var t = e.currentModelConfig,
          n = e.clientThreadId,
          i = e.gizmoId,
          a = e.icon,
          r = (0, b.UL)(n),
          o = (0, y.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.id;
          }),
          l = (0, eP.Ml)();
        if (null !== (0, g.useContext)(k.gB)) return null;
        if (l) {
          var c,
            d = null !== (c = r.conversationTemplateId) && void 0 !== c ? c : i;
          return null == d
            ? (0, s.jsx)(ek, { currentModelConfig: t, clientThreadId: n })
            : (0, s.jsx)(ey, { gizmoId: d, clientThreadId: n });
        }
        return (0, s.jsx)(eL, {
          children:
            null != o && null != r.conversationTemplateId
              ? (0, s.jsx)(E, {
                  clientThreadId: n,
                  workspaceId: o,
                  conversationTemplateId: r.conversationTemplateId,
                })
              : (0, s.jsx)(eD, {
                  currentModelConfig: t,
                  clientThreadId: n,
                  icon: a,
                }),
        });
      }
      function eL(e) {
        var t = e.children,
          n = (0, j.tN)(j.bM.isThreadHeaderVisible),
          i = (0, l.c)(0),
          r = (0, g.useRef)(null),
          o = (0, g.useRef)(null),
          h = (0, a._)((0, v.useAtTop)(), 1)[0],
          m = (0, g.useCallback)(
            function (e) {
              var t = e.scrollTop;
              if (null == r.current || r.current === t) {
                r.current = t;
                return;
              }
              if (
                ((o.current = r.current),
                (r.current = t),
                o.current > r.current)
              ) {
                j.vm.showThreadHeader();
                var n = Math.max(
                  eZ[0],
                  i.get() - Math.abs(o.current - r.current)
                );
                n !== i.get() && i.set(n);
              } else {
                var a = Math.min(
                  eZ[1],
                  i.get() + Math.abs(o.current - r.current)
                );
                a !== i.get() && i.set(a);
              }
            },
            [i]
          ),
          x = (0, c.H)(i, eZ, ["0%", "-100%"]),
          p = (0, a._)((0, g.useState)(x.get()), 2),
          b = (p[0], p[1]);
        (0, d.W)(x, "change", function (e) {
          b(e);
        });
        var y = (0, u.Y)(eI(), x);
        (0, g.useEffect)(function () {
          j.vm.showThreadHeader();
        }, []);
        var w = null !== (0, g.useContext)(k.gB);
        return (
          (0, v.useObserveScrollPosition)(w ? void 0 : m),
          (0, s.jsx)(f.E.header, {
            animate: n
              ? void 0
              : {
                  top: n ? 0 : "-90px",
                  transition: { duration: 0.2, ease: "easeIn" },
                },
            style: {
              boxShadow: !h && n ? "0px 4px 24px 0px #0000000D" : void 0,
              transform: n ? y : void 0,
            },
            className: "sticky top-0 z-10 w-full bg-white dark:bg-gray-800",
            children: t,
          })
        );
      }
      function eD(e) {
        var t,
          n,
          a,
          r = e.currentModelConfig,
          o = e.clientThreadId,
          l = e.icon,
          c = (0, m.Z)(),
          d = null !== (0, g.useContext)(k.gB),
          u = (0, j.tN)(function (e) {
            return "debug" === e.activeSidebar;
          }),
          f = (0, y.hz)().has("debug") && !u,
          p = [];
        f &&
          p.push(
            (0, s.jsx)(O.u, {
              side: "left",
              label: c.formatMessage(eE.openDebug),
              children: (0, s.jsx)(G.O, {
                onClick: function () {
                  return j.vm.toggleActiveSidebar("debug");
                },
                "aria-label": c.formatMessage(eE.openDebug),
                children: (0, s.jsx)(S.cDN, { className: "icon-sm" }),
              }),
            })
          ),
          p.push((0, s.jsx)(ez, { clientThreadId: o }));
        var v = (0, b.Qi)(o),
          C = null != v,
          M =
            C &&
            null == v.aboutModelMessage &&
            null == v.aboutUserMessage &&
            null !== v.shareId,
          _ = (0, b.Ro)(o);
        void 0 === _ && (_ = r);
        var T = _.tags
            .filter(function (e) {
              return N.D2.includes(e);
            })
            .map(function (e) {
              return (0, N.Vp)(e);
            }),
          P = d ? _.title : r.title,
          I = (0, A.i)(o);
        if (I.length > 0) {
          var Z = I.map(function (e, t) {
            return (0,
            s.jsx)(w.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, t);
          });
          a = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                children: (0, s.jsx)(x.Z, (0, i._)({}, eE.enabledPlugins)),
              }),
              Z,
            ],
          });
        }
        var z = (0, h.useRouter)(),
          B =
            d &&
            (null === (t = z.query) || void 0 === t
              ? void 0
              : null === (n = t.shareParams) || void 0 === n
              ? void 0
              : n[1]) === "moderate";
        return (0, s.jsxs)("div", {
          className:
            "relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300",
          children: [
            (0, s.jsx)("div", {
              className: "hidden flex-shrink flex-row sm:flex",
              children: p.map(function (e, t) {
                return (0, s.jsx)(G.h, {}, t);
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "flex flex-1 flex-grow items-center gap-1 px-2 py-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0",
              children: [
                d &&
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-center gap-1",
                    children: [
                      (0, s.jsx)("span", {
                        children: (0, s.jsx)(x.Z, (0, i._)({}, eE.sharedChat)),
                      }),
                      (0, s.jsx)("span", { className: "px-1", children: "•" }),
                    ],
                  }),
                !d && null != l && (0, s.jsx)(l, { className: "icon-sm" }),
                (0, s.jsx)("span", { children: P }),
                T,
                a
                  ? (0, s.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, s.jsx)("span", {
                          className: "px-1",
                          children: "•",
                        }),
                        a,
                      ],
                    })
                  : null,
                B &&
                  (0, s.jsxs)("div", {
                    className: "flex items-center justify-center gap-1",
                    children: [
                      (0, s.jsx)("span", { className: "px-1", children: "•" }),
                      (0, s.jsx)("strong", {
                        children: (0, s.jsx)(
                          x.Z,
                          (0, i._)({}, eE.moderationView)
                        ),
                      }),
                    ],
                  }),
                !d &&
                  C &&
                  !M &&
                  (0, s.jsx)("div", {
                    className: "",
                    children: (0, s.jsx)(eR, { clientThreadId: o }),
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "flex flex-shrink flex-row",
              children: p.map(function (e, t) {
                return (0, s.jsx)("span", { children: e }, t);
              }),
            }),
          ],
        });
      }
      var eR = function (e) {
          var t = e.clientThreadId,
            n = (0, b.Qi)(t),
            a = (0, g.useMemo)(
              function () {
                if (null == n) return null;
                var e = n.aboutUserMessage,
                  t = n.aboutModelMessage,
                  a = n.fallback;
                return null != e && null != t
                  ? (0, s.jsxs)("div", {
                      className: "flex flex-col gap-7",
                      children: [
                        null !== e &&
                          "" !== e &&
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, s.jsx)(
                                  x.Z,
                                  (0, i._)({}, eS.sY.aboutYouHelpText)
                                ),
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-row gap-1 text-gray-500",
                                children: e,
                              }),
                            ],
                          }),
                        null !== t &&
                          "" !== t &&
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "font-medium text-gray-600 dark:text-gray-200",
                                children: (0, s.jsx)(
                                  x.Z,
                                  (0, i._)({}, eS.sY.modelHelpText)
                                ),
                              }),
                              (0, s.jsx)("div", {
                                className: "flex flex-row gap-1 text-gray-500",
                                children: t,
                              }),
                            ],
                          }),
                      ],
                    })
                  : null != a
                  ? a
                  : null;
              },
              [n]
            );
          return null === n
            ? null
            : (0, s.jsx)(s.Fragment, {
                children: (0, s.jsx)(M, {
                  contentClassName:
                    "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                  side: "bottom",
                  sideOffset: 8,
                  content: (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "mb-5 mt-1 border-b border-black/10 pb-5 dark:border-white/10",
                        children: (0, s.jsx)("div", {
                          className:
                            "flex flex-row items-center gap-2 text-gray-500",
                          children: (0, s.jsx)(
                            x.Z,
                            (0, i._)({}, eE.chatPreferencesNote)
                          ),
                        }),
                      }),
                      a,
                    ],
                  }),
                  children: (0, s.jsxs)("div", {
                    className: "cursor-pointer pt-0.5",
                    children: [
                      (0, s.jsx)(_.HV, {
                        className:
                          "h-4 w-4 flex-shrink-0 sm:mb-0.5 sm:h-5 sm:w-5",
                      }),
                      (0, s.jsx)(o.T, {
                        children: (0, s.jsx)(
                          x.Z,
                          (0, i._)({}, eE.chatPreferencesInfoLabel)
                        ),
                      }),
                    ],
                  }),
                }),
              });
        },
        eE = (0, p.vU)({
          chatPreferencesInfoLabel: {
            id: "ThreadSettings.chatPreferencesInfoLabel",
            defaultMessage: "Custom instructions details",
            description: "Label for the Custom instructions info icon",
          },
          chatPreferencesNote: {
            id: "ThreadSettings.chatPreferencesNote",
            defaultMessage:
              "Custom instructions are on and can only be changed at the beginning of the chat.",
            description: "Label in the popover for Custom Instructions",
          },
          openDebug: {
            id: "ThreadSettings.openDebug",
            defaultMessage: "Open debug sidebar",
            description: "Open debug sidebar button tooltip",
          },
          shareChat: {
            id: "ThreadSettings.shareChat",
            defaultMessage: "Share chat",
            description: "Open share modal button tooltip",
          },
          sharedChat: {
            id: "ThreadHeader.sharedChat",
            defaultMessage: "Shared Chat",
            description: "Label for shared chat status",
          },
          enabledPlugins: {
            id: "ThreadHeader.enabledPlugins",
            defaultMessage: "Enabled plugins:",
            description: "Label for enabled plugins in the header",
          },
          moderationView: {
            id: "ThreadHeader.moderationView",
            defaultMessage: "MODERATION VIEW",
            description: "Label for moderation view status",
          },
          downloadChatDebugInfo: {
            id: "ThreadHeader.downloadChatDebugInfo",
            defaultMessage: "Download chat debug info",
            description: "Title for the Download chat debug info modal",
          },
          downloadButton: {
            id: "ThreadHeader.downloadButton",
            defaultMessage: "Download",
            description:
              "Download button text in the Download chat debug info modal",
          },
          cancelButton: {
            id: "ThreadHeader.cancelButton",
            defaultMessage: "Cancel",
            description:
              "Cancel button text in the Download chat debug info modal",
          },
        });
    },
    23211: function (e, t, n) {
      n.d(t, {
        D: function () {
          return i;
        },
        z: function () {
          return a;
        },
      });
      var i = "ChatGPT",
        a = "Untitled";
    },
    40547: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(39324),
        a = n(10064),
        r = n(35250),
        s = n(7184),
        o = n(21950),
        l = n(35265),
        c = n(10943),
        d = n(59904),
        u = n(17944),
        f = n(19253),
        h = n(19841),
        g = n(21988),
        m = n.n(g),
        x = n(70079),
        p = n(32004),
        v = n(94968),
        b = {
          src: "/_next/static/media/onboarding-icon-autodeck.a93d5bdd.png",
          height: 288,
          width: 288,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42h3PS0rDQAAG4H+SeaVJrBFE2xtkqbtQ6Ck8gRvduhA8ylxFXErJTrqzNBtFEBXENqFJOpmH0O8GHwGAVt3kXGQqiM8KH09h0vPSROktgFe6e7jO2a9YII0yOzAYS7CnwbxhclGLaEbDalDm7iojlxfady0HQsSc6c3PLlt9aEVRTwuXnCAcBg5L0XQBwB3vCcVL5wpK3AS6N7D7Hq718DSEFB791mFtGCg5nZT2+XNeH0tNAsK9Bra104/vEddsVJL+/ik3hC2+x2G2TgQqKVElCb7GR39pHM4IAGzUMm+4VKtRVCyFxJtgpRX+0PwH9IZmGXBmq0UAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/onboarding-icon-cumulus.f841e525.png",
          height: 288,
          width: 288,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42j2PvUoDQRSF53XmyWwsrCxFsLL1BUSwtBC00Ea8EtYii2IwiVFJQmCz5IdNioSZezdzT2bzd+DA5X5fc0yVi9u6vbqv0V3tVZJmIs3+Jw2ylt3Ao7O2vbxuFY9JF89pGw/pG15+30FZo6Bxx5rj0x59/SwxXYJHM+Cjn+Op98c32TfO85TMf8eJ84AThWPFhIFxCQxdiZO8Lqb0EHYKVQWg4KBYxS6gaPBcjHAgDagE3ksxzAgQVTIibCMosMtBib/S++0SZrYhBIqiVK1uz7yBazFL1NxWfzsyAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: "/_next/static/media/onboarding-icon-interior.a5747c2c.png",
          height: 288,
          width: 288,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAclBMVEUAKToAKDgAJTUAJDQAIzQANEMAMEAALz8AMEEALz8AdIQAc4QAVmYAM0YALT0ALD0AJDYAIzUAABgAv9QArcEAqLsAp7sAkaMAj6EAfI0Ae4wAcYMAaXkAX28AXGwAP08APk4AGzAAGi8AGS4AABsAAA/pElgZAAAAE3RSTlMAACkpKcHBwe7u+fn5+vr6+vr6aGOLYQAAAEZJREFUeNoFQAcWgBAA/dmKBpq0xP2v2AOodE5SgOicUtYEvHbz0laO4d3Oa809xifsR7gniM94b7IAUyXGohgaIq2VpPkBmUwEN8VEfq4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        k = {
          src: "/_next/static/media/onboarding-icon-reactify.50d6fdd1.png",
          height: 288,
          width: 290,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR4nAUAu0rDUPSccx/pzW1qQqQlgpsItiCIDu0QpIOLCoLgUnRR6NQ/cHPyE/oTbnV0aejoYxHJEBwKkupgOtQhaXoFHT8EU65aXOkhGNYmWTFMOxGC6DOpEqz5YbPkfFIswXU3GgaFBvO7ROY4KbNUB+16d1xVtXCtcPKf3rkU7zGILM3JKIkrNkJv8yTPCuKDg2ssbo/g8esTTPxm6CFG0vYc61sX+XdW8MPeGZ7eX0E5ZfBy92SiJEJddefob1+OLVLhYj/Ig+6x3HtewN/HLH8VM2mhNcLGzk0TLTURGbng+WbqMfBKwvWKlwIXHQx2B0DMajGth0SyLbltSNpRSbwPYJJ/o79Xydc39fwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        w = {
          src: "/_next/static/media/onboarding-icon-writing.0eb75d42.png",
          height: 256,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AIiyvKzP1Mjm59j189Hs67bU16PJzn+qtQB/qragxcu42t3K5eSmub6hw8mdw8p2o7AAcqGuj7fApcrQsMfIj6iwoMXMirO8a5uqAGOTpHelso+5wnWXo22SoIy2wHOhr12NoABNf5RajJ9lmqxpl6drmqlkmatYi55Je5EAPWuDOnKKrrq5vsjFwcrHpLO1N2+IPGqCAIevt5i5vYqanIeYmomZmoaYmpW2u32nsABsl6SCqbKNtLyYvcOXvMKKsbl6pK5ij57uVHnCDM/HXwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function C(e) {
        var t = e.gizmoId,
          n = e.onClose,
          d = (0, o.kg)(t),
          h = (0, a._)(
            (0, x.useState)(function () {
              return !f.m.getItem(f.F.GizmoGPTsOnboarding);
            }),
            2
          ),
          g = h[0],
          m = h[1],
          v = (0, u.ec)(u.F_.isBusinessWorkspace);
        if (!g) return null;
        var b = function () {
          m(!1), f.m.setItem(f.F.GizmoGPTsOnboarding, !0), null == n || n();
        };
        return (0, r.jsxs)(s.Z, {
          isOpen: !0,
          onClose: b,
          type: "success",
          className: "!max-w-[500px]",
          noPadding: !0,
          children: [
            (0, r.jsx)("div", {
              className:
                "flex cursor-pointer justify-end p-4 text-xl text-token-text-tertiary",
              children: (0, r.jsx)("button", {
                onClick: b,
                children: (0, r.jsx)(l.v7, { className: "icon-md" }),
              }),
            }),
            (0, r.jsx)("div", {
              className: "mb-8 mt-4 w-full overflow-hidden",
              children: (0, r.jsx)(T, { gizmo: null == d ? void 0 : d.data }),
            }),
            (0, r.jsxs)("div", {
              className: "mx-4 mb-4 flex flex-col gap-4 md:mx-12 md:mb-12",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, r.jsx)("div", {
                      className: "text-center text-2xl font-bold",
                      children: v
                        ? (0, r.jsx)(
                            p.Z,
                            (0, i._)({}, M.gizmoGPTsOnboardingHeadlineBiz)
                          )
                        : (0, r.jsx)(
                            p.Z,
                            (0, i._)({}, M.gizmoGPTsOnboardingHeadline)
                          ),
                    }),
                    (0, r.jsx)("div", {
                      className: "text-center text-token-text-secondary",
                      children: v
                        ? (0, r.jsx)(
                            p.Z,
                            (0, i._)({}, M.gizmoGPTsOnboardingSubheadingBiz)
                          )
                        : (0, r.jsx)(
                            p.Z,
                            (0, i._)({}, M.gizmoGPTsOnboardingSubheading)
                          ),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex gap-3",
                  children: [
                    v &&
                      (0, r.jsx)(c.Zq, {
                        className: "w-full",
                        color: "neutral",
                        as: "a",
                        to: "https://help.openai.com/en/articles/8555535-gpts-chatgpt-enterprise-version",
                        openNewTab: !0,
                        children: (0, r.jsx)(
                          p.Z,
                          (0, i._)({}, M.gizmoOnboardingLearnMore)
                        ),
                      }),
                    (0, r.jsx)(c.Zq, {
                      className: "w-full",
                      color: "primary",
                      onClick: b,
                      children: (0, r.jsx)(
                        p.Z,
                        (0, i._)({}, M.gizmoOnboardingStart)
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var M = (0, v.vU)({
        gizmoGPTsOnboardingHeadline: {
          id: "gizmoGPTsOnboarding.headline",
          defaultMessage: "Introducing GPTs",
          description: "Headline for the GPTs onboarding modal",
        },
        gizmoGPTsOnboardingHeadlineBiz: {
          id: "gizmoGPTsOnboardingBiz.headline",
          defaultMessage:
            "Your templates are now GPTs, customized versions of ChatGPT.",
          description: "Headline for the biz GPTs onboarding modal",
        },
        gizmoGPTsOnboardingSubheading: {
          id: "gizmoGPTsOnboarding.subheading",
          defaultMessage:
            "Custom versions of ChatGPT that combine instructions, extra knowledge and capabilities for a specific purpose.",
          description: "Subheading for the GPTs onboarding modal",
        },
        gizmoGPTsOnboardingSubheadingBiz: {
          id: "gizmoGPTsOnboardingBiz.subheading",
          defaultMessage:
            "GPTs use custom instructions, data, and capabilities to tailor ChatGPT to your needs.",
          description: "Subheading for the biz GPTs onboarding modal",
        },
        gizmoOnboardingStart: {
          id: "gizmoOnboarding.start",
          defaultMessage: "Get started",
          description: "Button to start using GPTs",
        },
        gizmoOnboardingLearnMore: {
          id: "gizmoOnboarding.learnMore",
          defaultMessage: "Learn more",
          description: "Button to learn more about GPTs",
        },
      });
      function _(e) {
        var t = e.icon,
          n = e.iconClassName;
        return (0, r.jsxs)("div", {
          className: (0, h.default)(
            "relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full",
            n
          ),
          children: [
            null != t
              ? (0, r.jsx)(m(), {
                  src: t,
                  alt: "GPT Icon",
                  width: "112",
                  height: "112",
                  className: "h-full w-full",
                })
              : (0, r.jsx)(d.nI, { className: "h-[66%] w-[66%]" }),
            (0, r.jsx)("div", {
              className:
                "absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
            }),
          ],
        });
      }
      function A(e) {
        var t = e.icon;
        return (0, r.jsx)(_, { icon: t });
      }
      function N(e) {
        var t = e.icon;
        return (0, r.jsx)(_, { icon: t });
      }
      function T(e) {
        var t = e.gizmo;
        return (0, r.jsxs)("div", {
          className:
            "-ml-8 flex w-[calc(100%+4rem)] items-center justify-between",
          children: [
            (0, r.jsx)(A, { icon: j }),
            (0, r.jsx)(N, { icon: k }),
            null != t
              ? (0, r.jsx)(_, {
                  icon: t.profile_pic_permalink,
                  iconClassName: "w-[128px] h-[128px]",
                })
              : (0, r.jsx)(_, {
                  icon: w,
                  iconClassName: "w-[128px] h-[128px]",
                }),
            (0, r.jsx)(N, { icon: y }),
            (0, r.jsx)(A, { icon: b }),
          ],
        });
      }
    },
    46266: function (e, t, n) {
      n.d(t, {
        n: function () {
          return ei;
        },
        Z: function () {
          return et;
        },
      });
      var i = n(21722),
        a = n(39324),
        r = n(10064),
        s = n(38104),
        o = n(35250),
        l = n(7184),
        c = n(5053),
        d = n(73780),
        u = n(94705),
        f = n(21950),
        h = n(35265),
        g = n(96237),
        m = n(71209),
        x = n(4337),
        p = n(48133),
        v = n(30769),
        b = n(42798),
        j = n(86646),
        y = n(55548),
        k = n(65374),
        w = n(25494),
        C = n(68951),
        M = n(19841),
        _ = n(70079),
        A = n(1454),
        N = n(70671),
        T = n(32004),
        P = n(94968),
        S = n(21389);
      function I() {
        var e = (0, x._)(["flex flex-col gap-6"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function Z() {
        var e = (0, x._)(["flex flex-row justify-between py-3 items-center"]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      function z(e) {
        var t = e.value,
          n = e.message;
        return (0, o.jsx)(k.xz, {
          className:
            "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-surface-tertiary md:radix-state-active:bg-token-surface-tertiary md:radix-state-active:text-token-text-primary",
          value: t,
          children: (0, o.jsx)("div", {
            className: "truncate",
            children: (0, o.jsx)(T.Z, (0, a._)({}, n)),
          }),
        });
      }
      function B(e) {
        var t,
          n,
          r,
          l = e.gizmoId,
          c = e.actionSettings,
          d = e.actionTool,
          u = (0, w.D)({
            mutationFn:
              ((t = (0, i._)(function (e) {
                var t, n, i;
                return (0, s.Jh)(this, function (a) {
                  return (
                    (t = e.actionId),
                    (n = e.domain),
                    (i = e.settings),
                    [2, v.U.upsertUserActionSettings(t, n, i)]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSuccess: function () {
              C.E.invalidateQueries({
                queryKey: ["gizmo", "userActionSettings", { gizmoId: l }],
              });
            },
          });
        return (0, o.jsxs)("div", {
          children: [
            (0, o.jsxs)(R, {
              className: "border-b pt-0",
              children: [
                (0, o.jsx)("div", {
                  className: "font-medium",
                  children:
                    null === (n = d.data) || void 0 === n ? void 0 : n.domain,
                }),
                (0, o.jsxs)("a", {
                  href:
                    null === (r = d.data) || void 0 === r
                      ? void 0
                      : r.privacy_policy_url,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "flex items-center gap-1 text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                  children: [
                    (0, o.jsx)(T.Z, (0, a._)({}, E.privacyPolicyLink)),
                    (0, o.jsx)(A.AlO, {}),
                  ],
                }),
              ],
            }),
            Object.keys(c.operations)
              .filter(function (e) {
                return !c.operations[e].is_consequential;
              })
              .map(function (e, t) {
                var n,
                  i = c.operations[e],
                  r =
                    null === (n = c.action_settings) || void 0 === n
                      ? void 0
                      : n[e],
                  s = function (t) {
                    var n, i;
                    (null === (n = d.data) || void 0 === n
                      ? void 0
                      : n.action_id) &&
                      (null === (i = d.data) || void 0 === i
                        ? void 0
                        : i.domain) &&
                      u.mutateAsync({
                        actionId: d.data.action_id,
                        domain: d.data.domain,
                        settings: (0, g._)({}, e, t),
                      });
                  };
                return (0, o.jsxs)(
                  R,
                  {
                    children: [
                      (0, o.jsx)("div", { children: i.id }),
                      (0, o.jsxs)("select", {
                        value: r ? "always_allow" : "unset",
                        onChange: function (e) {
                          return s(e.target.value);
                        },
                        className:
                          "overflow-scroll rounded border-none pl-2 pr-8 dark:bg-gray-800",
                        children: [
                          (0, o.jsx)("option", {
                            value: "always_allow",
                            children: (0, o.jsx)(
                              T.Z,
                              (0, a._)({}, E.alwaysAllowDropdown)
                            ),
                          }),
                          (0, o.jsx)("option", {
                            value: "unset",
                            children: (0, o.jsx)(
                              T.Z,
                              (0, a._)({}, E.askDropdown)
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                );
              }),
          ],
        });
      }
      function L(e) {
        var t,
          n,
          r = e.gizmoId,
          l = e.actionSettings,
          c = e.actionTool,
          d = (0, w.D)({
            mutationFn:
              ((t = (0, i._)(function (e) {
                var t;
                return (0, s.Jh)(this, function (n) {
                  return (
                    (t = e.pluginId),
                    j.ZP.deletePluginUserSettings({ pluginId: t }),
                    [2]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSuccess: function () {
              C.E.invalidateQueries({
                queryKey: ["gizmo", "userActionSettings", { gizmoId: r }],
              });
            },
          }),
          u = "valid" === l.oauth_status;
        return (0, o.jsxs)(R, {
          children: [
            (0, o.jsx)("div", {
              className: "font-medium",
              children:
                null == c
                  ? void 0
                  : null === (n = c.data) || void 0 === n
                  ? void 0
                  : n.domain,
            }),
            (0, o.jsx)(p.z, {
              color: "neutral",
              className: "px-2 py-1",
              onClick: function () {
                var e, t, n, i, a;
                (null === (e = c.data) || void 0 === e
                  ? void 0
                  : e.action_id) &&
                  (null === (t = c.data) || void 0 === t ? void 0 : t.domain) &&
                  (u
                    ? d.mutateAsync({
                        pluginId:
                          null === (n = c.data) || void 0 === n
                            ? void 0
                            : n.action_id,
                      })
                    : v.U.doOAuthRedirect(
                        r,
                        null === (i = c.data) || void 0 === i
                          ? void 0
                          : i.action_id,
                        null === (a = c.data) || void 0 === a
                          ? void 0
                          : a.domain,
                        window.location.href
                      ));
              },
              children: (0, o.jsx)(T.Z, (0, a._)({}, u ? E.logout : E.login)),
            }),
          ],
        });
      }
      var D = S.Z.div(I()),
        R = S.Z.div(Z()),
        E = (0, P.vU)({
          title: {
            defaultMessage: "GPT's privacy settings",
            id: "GizmoPrivacySettings.title",
            description: "Title for the GPT privacy settings modal",
          },
          actions: {
            defaultMessage: "Actions",
            id: "GizmoPrivacySettings.actions",
            description: "Label for the actions tab",
          },
          connectedAccounts: {
            defaultMessage: "Connected accounts",
            id: "GizmoPrivacySettings.connectedAccounts",
            description: "Label for the connected accounts tab",
          },
          connectedAccountsDesc: {
            defaultMessage:
              "Manage which 3rd party accounts can be accessed by {gizmoName}.",
            id: "GizmoPrivacySettings.connectedAccountsDesc",
            description: "Description for the connected accounts tab",
          },
          allowedActionsTitle: {
            defaultMessage: "GPT's privacy settings",
            id: "GizmoPrivacySettings.allowedActionsTitle",
            description: "Title for the actions content body",
          },
          allowedActionsDesc: {
            defaultMessage:
              "Select which 3rd party actions are allowed in conversations with {gizmoName}.",
            id: "GizmoPrivacySettings.allowedActionsDesc",
            description: "Description for the actions content body",
          },
          privacyPolicyLink: {
            defaultMessage: "Privacy policy",
            id: "GizmoPrivacySettings.privacyPolicyLink",
            description: "Link text for the privacy policy",
          },
          alwaysAllowDropdown: {
            defaultMessage: "Always allow",
            id: "GizmoPrivacySettings.alwaysAllowDropdown",
            description: "Label text for the always allow button",
          },
          askDropdown: {
            defaultMessage: "Ask",
            id: "GizmoPrivacySettings.askDropdown",
            description: "Label text for the ask dropdown button",
          },
          login: {
            defaultMessage: "Log in",
            id: "GizmoPrivacySettings.login",
            description: "Button text for logging into an account",
          },
          logout: {
            defaultMessage: "Log out",
            id: "GizmoPrivacySettings.logout",
            description: "Button text for logging out of an account",
          },
        }),
        G = function (e) {
          var t = e.gizmo,
            n = (0, f.Wd)(t.id, !0),
            i = n.data,
            s = n.isLoading,
            c = (0, y.EV)(y.B.GPTPrivacySettings),
            d = function () {
              return y.vm.closeModal(y.B.GPTPrivacySettings);
            },
            h = (0, N.Z)(),
            g = (0, r._)((0, _.useState)("actions"), 2),
            x = g[0],
            p = g[1];
          return (0, o.jsx)(l.Z, {
            title: h.formatMessage(E.title),
            isOpen: c,
            onClose: d,
            type: "success",
            size: "custom",
            className: "min-h-[50vh] max-w-3xl",
            noPadding: !0,
            closeButton: (0, o.jsx)(u.ZP.CloseButton, { onClose: d }),
            children: s
              ? (0, o.jsx)(b.Z, {})
              : (0, o.jsxs)(k.fC, {
                  className: "flex flex-row gap-6 p-4",
                  orientation: "vertical",
                  defaultValue: x,
                  onValueChange: function (e) {
                    p(e);
                  },
                  children: [
                    (0, o.jsxs)(k.aV, {
                      className: (0, M.default)(
                        "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"
                      ),
                      children: [
                        (0, o.jsx)(z, { value: "actions", message: E.actions }),
                        (0, o.jsx)(z, {
                          value: "connected_accounts",
                          message: E.connectedAccounts,
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: "flex-1 text-sm",
                      children: [
                        "actions" === x &&
                          (0, o.jsxs)(D, {
                            children: [
                              (0, o.jsx)(
                                T.Z,
                                (0, m._)((0, a._)({}, E.allowedActionsDesc), {
                                  values: { gizmoName: t.name },
                                })
                              ),
                              null == i
                                ? void 0
                                : i.settings.map(function (e, n) {
                                    var i,
                                      a =
                                        null === (i = t.config.enabled_tools) ||
                                        void 0 === i
                                          ? void 0
                                          : i.find(function (t) {
                                              var n;
                                              return (
                                                (null === (n = t.data) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.action_id) === e.action_id
                                              );
                                            });
                                    return (
                                      a &&
                                      (0, o.jsx)(
                                        B,
                                        {
                                          gizmoId: t.id,
                                          actionSettings: e,
                                          actionTool: a,
                                        },
                                        n
                                      )
                                    );
                                  }),
                            ],
                          }),
                        "connected_accounts" === x &&
                          (0, o.jsxs)(D, {
                            children: [
                              (0, o.jsx)(
                                T.Z,
                                (0, m._)(
                                  (0, a._)({}, E.connectedAccountsDesc),
                                  { values: { gizmoName: t.name } }
                                )
                              ),
                              (0, o.jsx)("div", {
                                children:
                                  null == i
                                    ? void 0
                                    : i.settings.map(function (e, n) {
                                        var i,
                                          a =
                                            null ===
                                              (i = t.config.enabled_tools) ||
                                            void 0 === i
                                              ? void 0
                                              : i.find(function (t) {
                                                  var n;
                                                  return (
                                                    (null === (n = t.data) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n.action_id) ===
                                                    e.action_id
                                                  );
                                                });
                                        return (
                                          a &&
                                          e.oauth_status &&
                                          (0, o.jsx)(
                                            L,
                                            {
                                              gizmoId: t.id,
                                              actionSettings: e,
                                              actionTool: a,
                                            },
                                            n
                                          )
                                        );
                                      }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
          });
        },
        O = n(41187),
        U = n(10943),
        F = n(80275),
        H = n(28924),
        V = n(62682),
        q = n(51505),
        K = n(17944),
        W = n(8679),
        Y = n(18481),
        Q = n(47428),
        J = n(38574),
        X = n(10721),
        $ = n(27573),
        ee = n(73960);
      function et(e) {
        var t,
          n,
          l,
          d,
          u = e.children,
          g = e.gizmoTemplate,
          m = e.showReportModal,
          x = (0, X.useRouter)(),
          p = (0, ee.XX)(g),
          b = (0, Y.xj)(null == g ? void 0 : g.id),
          j = (0, K.hz)(),
          k = (0, r._)((0, _.useState)(!1), 2),
          w = k[0],
          C = k[1],
          M = (0, O.eY)(g.id),
          A =
            null === (n = g.config.tags) || void 0 === n
              ? void 0
              : n.includes(F.U9.FirstParty),
          N =
            g.share_recipient === F.Zz.Marketplace ||
            g.share_recipient === F.Zz.Link;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(Q.fC, {
              children: [
                (0, o.jsx)(Q.xz, { asChild: !0, children: u }),
                (0, o.jsx)(Q.Uv, {
                  children: (0, o.jsxs)(Q.VY, {
                    className:
                      "mt-2 min-w-[100px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                    align: "start",
                    children: [
                      (0, o.jsxs)(U.UA, {
                        onClick: function () {
                          return x.push("/g/".concat(g.short_url));
                        },
                        children: [
                          (0, o.jsx)(h.ks, { className: "icon-md" }),
                          (0, o.jsx)(T.Z, (0, a._)({}, eo.newChat)),
                        ],
                      }),
                      (0, o.jsxs)(U.UA, {
                        onClick: function () {
                          return y.vm.openModal(y.B.GPTDetails);
                        },
                        children: [
                          (0, o.jsx)(h.VX, { className: "icon-md" }),
                          (0, o.jsx)(T.Z, (0, a._)({}, eo.about)),
                        ],
                      }),
                      (null === (l = g.config) || void 0 === l
                        ? void 0
                        : null === (d = l.enabled_tools) || void 0 === d
                        ? void 0
                        : d.find(function (e) {
                            return e.tool_id === c.qK.JitPlugin;
                          })) &&
                        (0, o.jsxs)(U.UA, {
                          onClick: function () {
                            return y.vm.openModal(y.B.GPTPrivacySettings);
                          },
                          children: [
                            (0, o.jsx)(h.LX, { className: "icon-md" }),
                            (0, o.jsx)(T.Z, (0, a._)({}, eo.privacySettings)),
                          ],
                        }),
                      p &&
                        (0, o.jsxs)(U.UA, {
                          onClick: function () {
                            x.push(b, void 0, { shallow: !0 });
                          },
                          children: [
                            (0, o.jsx)(h.RR, { className: "icon-md" }),
                            (0, o.jsx)(T.Z, (0, a._)({}, eo.customize)),
                          ],
                        }),
                      (0, o.jsxs)(U.UA, {
                        onClick: function () {
                          v.U.updateGizmoSidebar(g.id, M ? "hide" : "keep");
                        },
                        children: [
                          M
                            ? (0, o.jsx)(h.q5, { className: "icon-md" })
                            : (0, o.jsx)(h.pI, { className: "icon-md" }),
                          (0, o.jsx)(
                            T.Z,
                            (0, a._)(
                              {},
                              M ? O.Vc.hideFromSidebar : O.Vc.keepInSidebar
                            )
                          ),
                        ],
                      }),
                      g.share_recipient != F.Zz.Private &&
                        (0, o.jsxs)(U.UA, {
                          onClick:
                            ((t = (0, i._)(function (e) {
                              var t, n;
                              return (0, s.Jh)(this, function (i) {
                                switch (i.label) {
                                  case 0:
                                    e.stopPropagation(),
                                      e.preventDefault(),
                                      (t = (0, f.kS)(g.id)),
                                      (i.label = 1);
                                  case 1:
                                    return (
                                      i.trys.push([1, 3, , 4]),
                                      (n =
                                        t && g.short_url
                                          ? (0, f.AG)(g.short_url)
                                          : ""
                                              .concat("https://chat.openai.com")
                                              .concat((0, f.m_)(g))),
                                      [4, (0, J.S)(n)]
                                    );
                                  case 2:
                                    return (
                                      i.sent(),
                                      C(!0),
                                      setTimeout(function () {
                                        C(!1);
                                      }, 2e3),
                                      [3, 4]
                                    );
                                  case 3:
                                    return console.error(i.sent()), [2];
                                  case 4:
                                    return [2];
                                }
                              });
                            })),
                            function (e) {
                              return t.apply(this, arguments);
                            }),
                          children: [
                            (0, o.jsx)(h.HN, { className: "icon-md" }),
                            w
                              ? (0, o.jsx)(T.Z, (0, a._)({}, eo.copiedURL))
                              : (0, o.jsx)(T.Z, (0, a._)({}, eo.copyLink)),
                          ],
                        }),
                      !A &&
                        N &&
                        (0, o.jsxs)(U.UA, {
                          onClick: m,
                          children: [
                            (0, o.jsx)(h.AZ, { className: "icon-md" }),
                            (0, o.jsx)(T.Z, (0, a._)({}, eo.report)),
                          ],
                        }),
                      j.has("debug") &&
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(U.Cl, {}),
                            (0, o.jsx)(U.UA, {
                              onClick: function () {
                                x.push((0, f.i6)(g), void 0);
                              },
                              children: "(Internal) See share page",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
            (0, o.jsx)(ea, { gizmo: g }),
            (0, o.jsx)(G, { gizmo: g }),
          ],
        });
      }
      var en = function (e) {
          var t = e.clientThreadId,
            n = (0, K.hz)().has("debug"),
            i = q.tQ.getServerThreadId(t),
            r = (0, d.C)(V.L0.WorkspaceShareLinks);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              r &&
                i &&
                (0, o.jsxs)(U.UA, {
                  onClick: function () {
                    return y.vm.openSharingModal(i);
                  },
                  children: [
                    (0, o.jsx)(h.Gp, { className: "icon-md" }),
                    (0, o.jsx)(T.Z, (0, a._)({}, eo.shareChat)),
                  ],
                }),
              n &&
                (0, o.jsxs)(U.UA, {
                  onClick: function () {
                    return y.vm.toggleActiveSidebar("debug");
                  },
                  children: [
                    (0, o.jsx)(h.WP, { className: "icon-md" }),
                    (0, o.jsx)(T.Z, (0, a._)({}, eo.debugChat)),
                  ],
                }),
              (0, o.jsxs)(U.UA, {
                onClick: function () {
                  setTimeout(function () {
                    W.n.publish({ kind: "editTitle" });
                  }, 100);
                },
                children: [
                  (0, o.jsx)(h.eu, { className: "icon-md" }),
                  (0, o.jsx)(T.Z, (0, a._)({}, eo.renameChat)),
                ],
              }),
              (0, o.jsxs)(U.UA, {
                color: "danger",
                onClick: function () {
                  W.n.publish({ kind: "deleteChat" });
                },
                children: [
                  (0, o.jsx)(h.a_, { className: "icon-md" }),
                  (0, o.jsx)(T.Z, (0, a._)({}, eo.deleteChat)),
                ],
              }),
            ],
          });
        },
        ei = function (e) {
          var t = e.clientThreadId,
            n = e.children;
          return (0, o.jsxs)(Q.fC, {
            children: [
              (0, o.jsx)(Q.xz, { asChild: !0, children: n }),
              (0, o.jsx)(Q.Uv, {
                children: (0, o.jsx)(Q.VY, {
                  className:
                    "mt-2 min-w-[200px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                  side: "bottom",
                  align: "start",
                  sideOffset: -15,
                  children: (0, o.jsx)(en, { clientThreadId: t }),
                }),
              }),
            ],
          });
        },
        ea = function (e) {
          var t,
            n = e.gizmo,
            i = (0, y.EV)(y.B.GPTDetails),
            r = function () {
              return y.vm.closeModal(y.B.GPTDetails);
            },
            s = (0, H.ZP)().find(function (e) {
              return e.categoryId === H.ft.GPT4;
            }),
            c = (0, K.ec)(K.F_.accountUserId),
            d = (0, K.aF)(),
            f = null == d ? void 0 : d.id,
            g =
              null !== (t = (0, K.ec)(K.F_.businessWorkspaceId)) && void 0 !== t
                ? t
                : void 0,
            m = null != n && null != c && null != f && (0, ee.k1)(n, c, f, g);
          return (0, o.jsxs)(l.Z, {
            isOpen: i,
            onClose: r,
            type: "success",
            noPadding: !0,
            children: [
              (0, o.jsx)("div", {
                className: "absolute right-4 top-4",
                children: (0, o.jsx)(u.ZP.CloseButton, { onClose: r }),
              }),
              (0, o.jsx)("div", {
                className:
                  "border-b border-token-border-heavy px-4 py-5 sm:px-6 sm:py-10",
                children: (0, o.jsx)($.r, { gizmo: n, isOwner: m }),
              }),
              (0, o.jsxs)("div", {
                className: "px-4 py-5 text-center sm:px-6 sm:py-10",
                children: [
                  (0, o.jsx)("div", {
                    className: "text-sm font-normal text-token-text-tertiary",
                    children: (0, o.jsx)(T.Z, (0, a._)({}, eo.poweredBy)),
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "flex items-center justify-center gap-1.5 pt-1 text-2xl font-medium",
                    children: [
                      (0, o.jsx)(h.HV, { className: "text-brand-purple" }),
                      (0, o.jsx)(T.Z, (0, a._)({}, eo.gpt4)),
                    ],
                  }),
                  (null == s ? void 0 : s.description) &&
                    (0, o.jsx)("div", {
                      className:
                        "mx-auto max-w-xs pt-5 text-base font-normal text-token-text-secondary",
                      children: null == s ? void 0 : s.description,
                    }),
                  (0, o.jsx)(es, { tools: n.config.enabled_tools }),
                ],
              }),
            ],
          });
        },
        er = function (e) {
          switch (e.tool_id) {
            case "browser":
              return "Browsing";
            case "python":
              return "Data Analysis";
            case "function":
              return "Function Calling";
            case "dalle":
              return "DALL•E";
            default:
              return null;
          }
        },
        es = function (e) {
          var t = e.tools,
            n = new Set();
          if (!t || 0 === t.length) return null;
          var i = !0,
            a = !1,
            r = void 0;
          try {
            for (
              var s, l = t[Symbol.iterator]();
              !(i = (s = l.next()).done);
              i = !0
            ) {
              var c = s.value,
                d = er(c);
              null != d && n.add(d);
            }
          } catch (e) {
            (a = !0), (r = e);
          } finally {
            try {
              i || null == l.return || l.return();
            } finally {
              if (a) throw r;
            }
          }
          return 0 === n.size
            ? null
            : (0, o.jsx)("div", {
                className: "flex flex-wrap justify-center gap-3 pt-5",
                children: Array.from(n).map(function (e, t) {
                  return (0,
                  o.jsxs)("div", { className: "flex items-center gap-0.5 pt-1 text-xs font-normal text-token-text-tertiary", children: [(0, o.jsx)(h.oS, { className: "icon-sm text-green-600" }), e] }, t);
                }),
              });
        },
        eo = (0, P.vU)({
          poweredBy: {
            defaultMessage: "Powered by",
            id: "GizmoInformation.poweredBy",
            description:
              "Label for the powered by section of the GPT details modal",
          },
          gpt4: {
            defaultMessage: "GPT-4",
            id: "GizmoInformation.gpt4",
            description: "Label for the GPT-4 category of the Gizmo model",
          },
          gpt3_5: {
            defaultMessage: "GPT-3.5",
            id: "GizmoInformation.gpt3_5",
            description: "Label for the GPT-3.5 category of the Gizmo model",
          },
          newChat: {
            defaultMessage: "New chat",
            id: "GizmoInformation.newChat",
            description: "Label for the new chat button",
          },
          about: {
            defaultMessage: "About",
            id: "GizmoInformation.about",
            description: "Label for the model details button",
          },
          privacySettings: {
            defaultMessage: "Privacy settings",
            id: "GizmoInformation.privacySettings",
            description: "Label for the model's privacy settings button",
          },
          viewDetails: {
            defaultMessage: "View details",
            id: "GizmoInformation.viewDetails",
            description: "Label for the model details button",
          },
          share: {
            defaultMessage: "Share",
            id: "GizmoInformation.share",
            description: "Label for the share button",
          },
          favorite: {
            defaultMessage: "Favorite",
            id: "GizmoInformation.favorite",
            description: "Label for the favorite button",
          },
          customize: {
            defaultMessage: "Edit GPT",
            id: "GizmoInformation.customize",
            description: "Label for the customize button",
          },
          report: {
            defaultMessage: "Report",
            id: "GizmoInformation.report",
            description: "Label for the report button",
          },
          privacy: {
            defaultMessage: "Privacy",
            id: "GizmoInformation.privacy",
            description: "Label for the privacy button",
          },
          deleteChat: {
            defaultMessage: "Delete chat",
            id: "GizmoInformation.deleteChat",
            description: "Delete chat button",
          },
          debugChat: {
            defaultMessage: "Debug",
            id: "GizmoInformation.debugChat",
            description: "Debug chat button",
          },
          renameChat: {
            defaultMessage: "Rename",
            id: "GizmoInformation.renameChat",
            description: "Rename chat button",
          },
          copyLink: {
            defaultMessage: "Copy link",
            id: "GizmoInformation.copyLink",
            description: "Share chat button",
          },
          shareChat: {
            defaultMessage: "Share",
            id: "GizmoInformation.shareChat",
            description: "Share chat button",
          },
          copiedURL: {
            defaultMessage: "Copied URL",
            id: "GizmoInformation.copiedURL",
            description: "Text that displays when you copy a url",
          },
        });
    },
    27573: function (e, t, n) {
      n.d(t, {
        r: function () {
          return d;
        },
      });
      var i = n(35250),
        a = n(15635),
        r = n(418),
        s = n(35265),
        o = n(80275),
        l = n(42325),
        c = n(40547);
      function d(e) {
        var t,
          n,
          d = e.gizmo,
          u = e.isOwner,
          f = e.isAnon,
          h = void 0 !== f && f,
          g = e.hideOwner,
          m = e.children,
          x = !!(null === (n = null == d ? void 0 : d.config.tags) ||
          void 0 === n
            ? void 0
            : n.includes(o.U9.FirstParty)),
          p =
            null == d
              ? null
              : (
                  null === (t = d.author) || void 0 === t
                    ? void 0
                    : t.display_name
                )
              ? d.author.display_name
              : "".concat(d.name, "’s builder");
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: "flex h-full flex-col items-center justify-center",
              children: [
                (0, i.jsx)(r.Z, {
                  isFirstParty: x || !d,
                  src: null == d ? void 0 : d.profile_pic_permalink,
                  className: "mb-3 h-[72px] w-[72px]",
                }),
                null != d
                  ? (0, i.jsxs)("div", {
                      className: "flex flex-col items-center gap-0 p-2",
                      children: [
                        (0, i.jsx)("div", {
                          className: "text-center text-2xl font-medium",
                          children: d.name,
                        }),
                        d.description &&
                          (0, i.jsx)("div", {
                            className:
                              "max-w-md text-center text-xl font-normal text-token-text-secondary",
                            children: d.description,
                          }),
                        !(void 0 !== g && g) &&
                          (0, i.jsx)("div", {
                            className:
                              "mt-1 flex items-center gap-1 text-token-text-tertiary",
                            children: x
                              ? (0, i.jsx)(l.S3, { children: "By ChatGPT" })
                              : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsx)(l.ZP, { gizmo: d }),
                                    !u &&
                                      !h &&
                                      (0, i.jsx)(a.u, {
                                        className: "pt-[1px]",
                                        label: (0, i.jsxs)(i.Fragment, {
                                          children: [
                                            p,
                                            " can’t view your chats",
                                          ],
                                        }),
                                        children: (0, i.jsx)(s.VX, {
                                          className: "icon-xs",
                                        }),
                                      }),
                                  ],
                                }),
                          }),
                      ],
                    })
                  : (0, i.jsx)("div", {
                      className: "mb-5 text-2xl font-medium",
                      children: "How can I help you today?",
                    }),
                m,
              ],
            }),
            (null == d ? void 0 : d.id) != null &&
              !h &&
              (0, i.jsx)(c.Z, { gizmoId: d.id }),
          ],
        });
      }
    },
    41187: function (e, t, n) {
      n.d(t, {
        Dy: function () {
          return D;
        },
        Vc: function () {
          return U;
        },
        eY: function () {
          return L;
        },
        iD: function () {
          return O;
        },
        jl: function () {
          return E;
        },
      });
      var i,
        a,
        r = n(21722),
        s = n(39324),
        o = n(10064),
        l = n(38104),
        c = n(35250),
        d = n(39368),
        u = n(15635),
        f = n(418),
        h = n(23211),
        g = n(21950),
        m = n(35265),
        x = n(30769),
        p = n(23234),
        v = n(10943),
        b = n(80275),
        j = n(61802),
        y = n(17944),
        k = n(18481),
        w = n(47428),
        C = n(4536),
        M = n(19841),
        _ = n(97296),
        A = n(61888),
        N = n(73040),
        T = n.n(N),
        P = n(70079),
        S = n(32004),
        I = n(70671),
        Z = n(94968),
        z = n(27573),
        B = n(73960);
      function L(e) {
        var t = (0, g.Wz)().data,
          n = (void 0 === t ? {} : t).gizmos;
        return (
          !!n &&
          n.some(function (t) {
            return t.gizmo.id === e;
          })
        );
      }
      function D(e) {
        var t,
          n,
          i,
          r,
          o = e.currentGizmoId,
          l = function (e, t) {
            return (0, c.jsx)(
              E,
              { gizmo: e, isActive: e.id === o, section: t },
              e.id
            );
          },
          d = (0, g.Wz)().data,
          u = (void 0 === d ? {} : d).gizmos,
          f = (0, A.groupBy)(u, function (e) {
            return e.flair.kind;
          }),
          h =
            (null === (t = f[b.JK.Recent]) || void 0 === t
              ? void 0
              : t.length) > 0;
        return (0, p.Ml)()
          ? (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)("div", {
                  className: "sticky left-0 right-0 top-0 z-20 bg-black pt-3.5",
                  children: (0, c.jsx)(E, {
                    gizmo: void 0,
                    isActive: void 0 === o,
                  }),
                }),
                (0, c.jsxs)("div", {
                  children: [
                    null === (n = f[b.JK.FirstParty]) || void 0 === n
                      ? void 0
                      : n.map(function (e) {
                          return l(e.gizmo, a.Keep);
                        }),
                    null === (i = f[b.JK.SidebarKeep]) || void 0 === i
                      ? void 0
                      : i.map(function (e) {
                          return l(e.gizmo, a.Keep);
                        }),
                    h &&
                      (0, c.jsx)("div", {
                        className: "my-2 ml-2 h-px w-6 bg-token-border-light",
                      }),
                    null === (r = f[b.JK.Recent]) || void 0 === r
                      ? void 0
                      : r.slice(0, 2).map(function (e) {
                          return l(e.gizmo, a.Recents);
                        }),
                    (0, c.jsx)(_.E.div, {
                      whileTap: { scale: 0.98 },
                      children: (0, c.jsxs)(
                        T(),
                        {
                          href: (0, k.cy)(),
                          className:
                            "flex h-10 w-full items-center gap-2 rounded-lg px-2 font-semibold text-token-text-primary hover:bg-token-surface-primary",
                          children: [
                            (0, c.jsx)("div", {
                              className:
                                "flex h-7 w-7 items-center justify-center text-token-text-secondary",
                              children: (0, c.jsx)(m.hk, {
                                className: "icon-md",
                              }),
                            }),
                            (0, c.jsx)("span", {
                              className: "text-sm",
                              children: (0, c.jsx)(
                                S.Z,
                                (0, s._)({}, U.explore)
                              ),
                            }),
                          ],
                        },
                        "explore"
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      function R(e) {
        var t = e.gizmo,
          n = e.isOpen,
          i = e.setIsOpen,
          o = e.section;
        return (0, c.jsxs)(w.fC, {
          open: n,
          onOpenChange: i,
          children: [
            (0, c.jsx)(w.xz, {
              asChild: !0,
              children: (0, c.jsx)("button", {
                className: (0, M.default)(
                  "flex text-token-text-tertiary",
                  n ? "" : "invisible group-hover:visible"
                ),
                children: (0, c.jsx)(m.Yr, { className: "icon-md" }),
              }),
            }),
            (0, c.jsx)(w.Uv, {
              children: (0, c.jsxs)(w.VY, {
                className:
                  "mt-2 min-w-[100px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary py-1.5 shadow-lg dark:border-gray-700",
                align: "start",
                side: "bottom",
                sideOffset: -8,
                alignOffset: -8,
                children: [
                  o === a.Recents &&
                    (0, c.jsx)(v.UA, {
                      onClick: (0, r._)(function () {
                        return (0, l.Jh)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, x.U.updateGizmoSidebar(t.id, "keep")];
                            case 1:
                              return e.sent(), [2];
                          }
                        });
                      }),
                      children: (0, c.jsx)(S.Z, (0, s._)({}, U.keepInSidebar)),
                    }),
                  (0, c.jsx)(v.UA, {
                    onClick: (0, r._)(function () {
                      return (0, l.Jh)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, x.U.updateGizmoSidebar(t.id, "hide")];
                          case 1:
                            return e.sent(), [2];
                        }
                      });
                    }),
                    children: (0, c.jsx)(S.Z, (0, s._)({}, U.hideFromSidebar)),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function E(e) {
        var t,
          n = e.gizmo,
          i = e.historyDisabled,
          a = e.isActive,
          r = e.section,
          s = (0, I.Z)(),
          l = (0, o._)((0, P.useState)(!1), 2),
          d = l[0],
          x = l[1],
          v = (0, p.Og)(),
          j = !!(null === (t = null == n ? void 0 : n.config.tags) ||
          void 0 === t
            ? void 0
            : t.includes(b.U9.FirstParty)),
          y = "New chat";
        return (
          null != n
            ? (y = n.name || h.z)
            : i
            ? (y = s.formatMessage(U.clearChat))
            : v && (y = h.D),
          (0, c.jsx)(_.E.div, {
            className: "pb-0.5 last:pb-0",
            whileTap: { scale: 0.98 },
            children: (0, c.jsx)(G, {
              href: null != n ? (0, g.m_)(n) : "/",
              icon: (0, c.jsx)(f.Z, {
                isFirstParty: null == n || j,
                src: null == n ? void 0 : n.profile_pic_permalink,
                className: "h-7 w-7 flex-shrink-0",
              }),
              isMenuOpen: d,
              label: y,
              hoverRightIcon: (0, c.jsxs)("div", {
                className: "flex gap-3",
                children: [
                  null != n &&
                    (0, c.jsx)("div", {
                      className: "text-token-text-tertiary",
                      onClick: function (e) {
                        e.preventDefault();
                      },
                      children: (0, c.jsx)(R, {
                        gizmo: n,
                        isOpen: d,
                        setIsOpen: x,
                        section: r,
                      }),
                    }),
                  (0, c.jsx)(u.u, {
                    side: "right",
                    label: s.formatMessage(i ? U.clearChat : U.newChat),
                    delayDuration: 100,
                    className: "flex items-center",
                    children: (0, c.jsx)("button", {
                      className: a
                        ? "text-token-text-primary"
                        : d
                        ? "text-token-text-tertiary"
                        : "invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible",
                      children: i
                        ? (0, c.jsx)(m.vX, { className: "icon-md" })
                        : (0, c.jsx)(m.ks, { className: "icon-md" }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function G(e) {
        var t = e.href,
          n = e.icon,
          i = e.label,
          a = e.hoverRightIcon,
          r = e.isMenuOpen;
        return (0, c.jsxs)(T(), {
          href: t,
          shallow: !0,
          className: (0, M.default)(
            "group flex h-10 items-center gap-2 rounded-lg px-2 font-medium",
            r ? "bg-token-surface-primary" : "hover:bg-token-surface-primary"
          ),
          children: [
            n,
            (0, c.jsx)("div", {
              className:
                "grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",
              children: i,
            }),
            a,
          ],
        });
      }
      function O(e) {
        var t,
          n,
          i,
          a = e.clientThreadId,
          r = e.currentModel,
          s = (0, d.DT)(a),
          o = (0, d.rm)(),
          l = (0, g.kg)(s).data,
          u = (0, y.ec)(y.F_.accountUserId),
          f =
            null === (t = (0, C.kP)().session) || void 0 === t
              ? void 0
              : null === (n = t.user) || void 0 === n
              ? void 0
              : n.id,
          h =
            null !== (i = (0, y.ec)(y.F_.businessWorkspaceId)) && void 0 !== i
              ? i
              : void 0;
        if ((null != o || null != s) && null == l) return null;
        var m = null != l && null != u && null != f && (0, B.k1)(l, u, f, h);
        return (0, c.jsxs)("div", {
          className: "relative h-full",
          children: [
            (0, c.jsx)("div", {
              className: "absolute left-0 right-0",
              children: (0, c.jsx)(j.B, {
                icon: void 0,
                currentModelConfig: r,
                clientThreadId: a,
                gizmoId: s,
              }),
            }),
            (0, c.jsx)(z.r, { gizmo: l, isOwner: m }),
          ],
        });
      }
      ((i = a || (a = {}))[(i.Keep = 0)] = "Keep"),
        (i[(i.Recents = 1)] = "Recents");
      var U = (0, Z.vU)({
        explore: {
          id: "gizmo.explore",
          defaultMessage: "Explore",
          description: "Button that allows you to explore more GPTs",
        },
        keepInSidebar: {
          id: "gizmo.keepInSidebar",
          defaultMessage: "Keep in sidebar",
          description: "Whether to keep a gpt in sidebar",
        },
        hideFromSidebar: {
          id: "gizmo.hideFromSidebar",
          defaultMessage: "Hide from sidebar",
          description: "Whether to hide a gpt from sidebar",
        },
        newChat: {
          id: "gizmo.newChat",
          defaultMessage: "New chat",
          description: "New chat tooltip",
        },
        clearChat: {
          id: "gizmo.clearChat",
          defaultMessage: "Clear chat",
          description: "Clear chat button label",
        },
      });
    },
    69789: function (e, t, n) {
      n.d(t, {
        C: function () {
          return c;
        },
      });
      var i = n(39324),
        a = n(71209),
        r = n(91530),
        s = n.n(r),
        o = n(78103),
        l = { showReferralInviteModal: !1 },
        c = (0, o.ZP)()(function (e) {
          return (0, a._)((0, i._)({}, l), {
            setShowReferralInviteModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s();
              e({ showReferralInviteModal: t }), null == n || n();
            },
          });
        });
    },
    33377: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return e0;
        },
      });
      var i,
        a,
        r,
        s,
        o,
        l = n(39324),
        c = n(71209),
        d = n(70216),
        u = n(10064),
        f = n(4337),
        h = n(20485),
        g = n(35250),
        m = n(54636),
        x = n(42780),
        p = n(8874),
        v = n(19841),
        b = n(10721),
        j = n(70079),
        y = n(1454),
        k = n(32004),
        w = n(94968),
        C = n(21389),
        M = n(13246),
        _ = n(23234),
        A = n(50362),
        N = n(72290),
        T = n(96251),
        P = n(19253),
        S = n(17314),
        I = n(21722),
        Z = n(38104),
        z = n(94705),
        B = n(7184),
        L = n(89319);
      function D() {
        var e = (0, f._)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = (0, f._)(["w-10 text-2xl text-center"]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = (0, f._)(["flex-1 leading-5"]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = (0, f._)(["flex gap-4 flex-col text-sm"]);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      function O(e) {
        var t = e.icon,
          n = e.children;
        return (0, g.jsxs)(U, {
          children: [
            (0, g.jsx)(F, { children: t }),
            (0, g.jsx)(H, { children: n }),
          ],
        });
      }
      var U = C.Z.div(D()),
        F = C.Z.div(R()),
        H = C.Z.div(E()),
        V = C.Z.div(G()),
        q = n(86646),
        K = n(17944),
        W = n(82473),
        Y = n(4536),
        Q = n(70671),
        J = n(64898),
        X = n(43178);
      function $() {
        var e = (0, f._)(["mt-4 flex flex-col gap-4"]);
        return (
          ($ = function () {
            return e;
          }),
          e
        );
      }
      function ee() {
        var e = (0, f._)(["text-sm text-red-500"]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      var et = C.Z.div($()),
        en = C.Z.div(ee()),
        ei = n(35808),
        ea = (0, w.vU)({
          enterWebsiteDomainTitle: {
            id: "DevelopPluginModal.enterWebsiteDomainTitle",
            description:
              "Title for the section where users enter their website domain",
            defaultMessage: "Enter your website domain",
          },
          learnToBuildPlugin: {
            id: "DevelopPluginModal.learnToBuildPlugin",
            description:
              "Text for the link directing users to the plugin documentation",
            defaultMessage:
              "Visit our documentation to learn how to build a plugin.",
          },
          pluginApprovalWarning: {
            id: "DevelopPluginModal.pluginApprovalWarning",
            description:
              "Warning about plugin review process if the manifest is modified",
            defaultMessage:
              "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your plugin's manifest, your plugin will be removed from the store, and you will need to <resubmitLink>resubmit it for review</resubmitLink>.",
          },
          domainInputPlaceholder: {
            id: "DevelopPluginModal.domainInputPlaceholder",
            description: "Placeholder text for the domain input field",
            defaultMessage: "ex: openai.com or localhost:3000",
          },
          authenticationFileText: {
            id: "DevelopPluginModal.authenticationFileText",
            description: "Text for the link to expand authentication settings",
            defaultMessage: "My file requires authentication",
          },
          authenticationTypeText: {
            id: "DevelopPluginModal.authenticationTypeText",
            description: "Label for the section to choose authentication type",
            defaultMessage: "Authentication type",
          },
          accessTokenText: {
            id: "DevelopPluginModal.accessTokenText",
            description: "Label for the section to input the access token",
            defaultMessage: "Access token",
          },
          findManifestFileText: {
            id: "DevelopPluginModal.findManifestFileText",
            description: "Button text to find the manifest file",
            defaultMessage: "Find manifest file",
          },
          cancelButtonText: {
            id: "DevelopPluginModal.cancelButtonText",
            description: "Button text for the cancel button",
            defaultMessage: "Cancel",
          },
          domainDisplayName: {
            id: "DevelopPluginModal.domainDisplayName",
            description: "Display name for the domain input",
            defaultMessage: "Domain",
          },
          bearerLabel: {
            id: "DevelopPluginModal.bearerLabel",
            description:
              "Label for the Bearer authentication type radio button",
            defaultMessage: "Bearer",
          },
          basicLabel: {
            id: "DevelopPluginModal.basicLabel",
            description: "Label for the Basic authentication type radio button",
            defaultMessage: "Basic",
          },
          refetchManifestButtonText: {
            id: "DevelopPluginModal.refetchManifestButtonText",
            description: "Button text for refetching the manifest",
            defaultMessage: "Refetch manifest",
          },
          installLocalhostPluginButtonText: {
            id: "DevelopPluginModal.installLocalhostPluginButtonText",
            description: "Button text for installing localhost plugin",
            defaultMessage: "Install localhost plugin",
          },
          nextButtonText: {
            id: "DevelopPluginModal.nextButtonText",
            description: "Button text for the next step",
            defaultMessage: "Next",
          },
          foundPluginTitle: {
            id: "DevelopPluginModal.foundPluginTitle",
            description: "Title for the modal when a plugin is found",
            defaultMessage: "Found plugin",
          },
          enterServiceAccessTokenLabel: {
            id: "DevelopPluginModal.enterServiceAccessTokenLabel",
            description: "Label for entering the service access token",
            defaultMessage: "Enter your service access token:",
          },
          enterOAuthCredentialsLabel: {
            id: "DevelopPluginModal.enterOAuthCredentialsLabel",
            description: "Label for entering OAuth credentials",
            defaultMessage: "Enter your OAuth credentials:",
          },
          addVerificationTokenTitle: {
            id: "DevelopPluginModal.addVerificationTokenTitle",
            description: "Title for the modal when adding verification tokens",
            defaultMessage: "Add verification token",
          },
          verifyTokensButtonText: {
            id: "DevelopPluginModal.verifyTokensButtonText",
            description: "Button text for verifying tokens",
            defaultMessage: "Verify tokens",
          },
          addTokensLaterButtonText: {
            id: "DevelopPluginModal.addTokensLaterButtonText",
            description: "Button text for adding tokens later",
            defaultMessage: "I'll add the tokens later",
          },
          addVerificationTokensText: {
            id: "DevelopPluginModal.addVerificationTokensText",
            description:
              "Text for adding verification tokens to the manifest file",
            defaultMessage:
              "Add the following verification tokens to your manifest file:",
          },
          readyToInstallTitle: {
            id: "DevelopPluginModal.readyToInstallTitle",
            description:
              "Title for the modal when the plugin is ready to install",
            defaultMessage: "Ready to install",
          },
          installForMeButtonText: {
            id: "DevelopPluginModal.installForMeButtonText",
            description: "Button text for installing the plugin for the user",
            defaultMessage: "Install for me",
          },
          installLaterButtonText: {
            id: "DevelopPluginModal.installLaterButtonText",
            description: "Button text for installing the plugin later",
            defaultMessage: "Install later",
          },
          unverifiedPluginText: {
            id: "DevelopPluginModal.unverifiedPluginText",
            description:
              "Text about the unverified plugin being installed by a limited number of developers",
            defaultMessage:
              "Your unverified plugin can now be installed by <developersLink>up to 15 developers</developersLink>. Once you're ready to make your plugin available to everyone, you can <submitPluginLink>submit your plugin for review</submitPluginLink>.",
          },
        });
      function er(e) {
        var t = e.onClickInstall,
          n = e.onInstallLocalhost,
          i = e.onClose,
          a = (0, u._)((0, j.useState)(), 2),
          r = a[0],
          s = a[1],
          o = (0, u._)((0, j.useState)(), 2),
          l = o[0],
          c = o[1],
          d = (0, u._)((0, j.useState)(!1), 2),
          f = d[0],
          h = d[1],
          m = (0, j.useCallback)(function (e) {
            s(e);
          }, []),
          x = (0, j.useCallback)(function () {
            h(!0);
          }, []);
        return f && (null == r ? void 0 : r.scrapeManifestResponse.plugin)
          ? (0, g.jsx)(ed, {
              plugin: null == r ? void 0 : r.scrapeManifestResponse.plugin,
              onClickInstall: t,
              onClose: i,
            })
          : l && (null == r ? void 0 : r.scrapeManifestResponse.plugin)
          ? (0, g.jsx)(ec, {
              plugin: r.scrapeManifestResponse.plugin,
              manifestAccessToken: r.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: x,
              onClose: i,
            })
          : r
          ? (0, g.jsx)(el, {
              loadManifestResult: r,
              onRefetch: m,
              onSubmitAuthInfo: c,
              onReadyToInstall: x,
              onInstallLocalhost: n,
              onClose: i,
            })
          : (0, g.jsx)(es, { onFetch: m, onClose: i });
      }
      function es(e) {
        var t = e.onFetch,
          n = e.onClose,
          i = (0, Q.Z)(),
          a = (0, K.aF)(),
          r = (0, u._)((0, j.useState)(!1), 2),
          s = r[0],
          o = r[1],
          d = (0, u._)((0, j.useState)("bearer"), 2),
          f = d[0],
          h = d[1],
          m = (0, u._)((0, j.useState)(), 2),
          x = m[0],
          p = m[1],
          v = (0, j.useRef)(null),
          b = (0, j.useRef)(null),
          w = (0, J.useFetchManifestAndSpec)(),
          C = w.fetchManifestAndSpec,
          M = w.isLoading;
        (0, j.useEffect)(function () {
          var e;
          null === (e = v.current) || void 0 === e || e.focus();
        }, []);
        var _ = (0, j.useCallback)(function () {
            o(function (e) {
              return !e;
            });
          }, []),
          A = (0, j.useCallback)(function (e) {
            h(e.target.value);
          }, []),
          N = (0, j.useCallback)(
            (0, I._)(function () {
              var e, n, a;
              return (0, Z.Jh)(this, function (r) {
                return (a =
                  null === (e = v.current) || void 0 === e ? void 0 : e.value)
                  ? (C({
                      domain: a,
                      manifestAccessToken: s
                        ? {
                            authorization_type: f,
                            token:
                              (null === (n = b.current) || void 0 === n
                                ? void 0
                                : n.value) || "",
                          }
                        : void 0,
                      onSuccess: t,
                      onError: function (e) {
                        return p(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest."
                        );
                      },
                    }),
                    [2])
                  : (p(i.formatMessage(ea.domainInputPlaceholder)), [2]);
              });
            }),
            [C, t, f, s, i]
          );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: (0, g.jsx)(k.Z, (0, l._)({}, ea.enterWebsiteDomainTitle)),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(ea.findManifestFileText),
            color: "primary",
            onClick: N,
            loading: M,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(ea.cancelButtonText),
            color: "neutral",
            onClick: n,
          }),
          children: (0, g.jsxs)(et, {
            children: [
              (0, g.jsx)("a", {
                href: "https://platform.openai.com/docs/plugins/getting-started",
                target: "_blank",
                rel: "noreferrer",
                className: "text-green-600",
                children: (0, g.jsx)(k.Z, (0, l._)({}, ea.learnToBuildPlugin)),
              }),
              (0, g.jsx)(O, {
                icon: "\uD83D\uDEA8",
                children: (0, g.jsx)(
                  k.Z,
                  (0, c._)((0, l._)({}, ea.pluginApprovalWarning), {
                    values: {
                      resubmitLink: function (e) {
                        return (0, g.jsx)("a", {
                          target: "_blank",
                          rel: "noreferrer",
                          className: "text-green-600",
                          href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                          children: e,
                        });
                      },
                    },
                  })
                ),
              }),
              (0, g.jsx)(L.Z, {
                ref: v,
                name: "url",
                displayName: i.formatMessage(ea.domainDisplayName),
                placeholder: i.formatMessage(ea.domainInputPlaceholder),
                onPressEnter: N,
                autoFocus: !0,
              }),
              null != a &&
                (0, Y.yl)(a) &&
                (0, g.jsxs)(g.Fragment, {
                  children: [
                    (0, g.jsxs)("div", {
                      role: "button",
                      className:
                        "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                      onClick: _,
                      children: [
                        (0, g.jsx)("div", {
                          children: (0, g.jsx)(
                            k.Z,
                            (0, l._)({}, ea.authenticationFileText)
                          ),
                        }),
                        s
                          ? (0, g.jsx)(y.rH8, { className: "icon-sm" })
                          : (0, g.jsx)(y.bTu, { className: "icon-sm" }),
                      ],
                    }),
                    s &&
                      (0, g.jsxs)(g.Fragment, {
                        children: [
                          (0, g.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, g.jsx)("div", {
                                children: (0, g.jsx)(
                                  k.Z,
                                  (0, l._)({}, ea.authenticationTypeText)
                                ),
                              }),
                              (0, g.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                  (0, g.jsx)(eo, {
                                    label: i.formatMessage(ea.bearerLabel),
                                    value: "bearer",
                                    checked: "bearer" === f,
                                    onChange: A,
                                  }),
                                  (0, g.jsx)(eo, {
                                    label: i.formatMessage(ea.basicLabel),
                                    value: "basic",
                                    checked: "basic" === f,
                                    onChange: A,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "flex flex-col gap-2 text-sm",
                            children: [
                              (0, g.jsx)("div", {
                                children: (0, g.jsx)(
                                  k.Z,
                                  (0, l._)({}, ea.accessTokenText)
                                ),
                              }),
                              (0, g.jsx)(L.Z, {
                                ref: b,
                                name: "manifestToken",
                                onPressEnter: N,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              x && (0, g.jsx)(en, { children: x }),
            ],
          }),
        });
      }
      function eo(e) {
        var t = e.label,
          n = e.value,
          i = e.checked,
          a = e.onChange;
        return (0, g.jsxs)("label", {
          className: "flex items-center gap-2",
          children: [
            (0, g.jsx)("input", {
              name: "manifestAuthType",
              type: "radio",
              value: n,
              checked: i,
              onChange: a,
              className: "text-green-600 focus:ring-green-600",
            }),
            t,
          ],
        });
      }
      function el(e) {
        var t = e.loadManifestResult,
          n = e.onRefetch,
          i = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          r = e.onInstallLocalhost,
          s = e.onClose,
          o = (0, Q.Z)(),
          c = t.domain,
          d = t.manifestAccessToken,
          f = t.scrapeManifestResponse,
          h = t.apiValidationInfo,
          m = f.plugin,
          x = f.manifest_validation_info,
          p = (0, u._)((0, j.useState)(), 2),
          v = p[0],
          b = p[1],
          y = (0, u._)((0, j.useState)(!1), 2),
          w = y[0],
          C = y[1],
          M = (0, j.useRef)(null),
          _ = (0, j.useRef)(null),
          A = (0, j.useRef)(null),
          N = (0, J.useFetchManifestAndSpec)(),
          P = N.fetchManifestAndSpec,
          S = N.isLoading,
          D = (0, W.NL)(),
          R = m && (0, T.cf)(m),
          E = (null == m ? void 0 : m.manifest.auth.type) === "service_http",
          G = (null == m ? void 0 : m.manifest.auth.type) === "oauth",
          O =
            (x.errors && x.errors.length > 0) ||
            ((null == h ? void 0 : h.errors) &&
              (null == h ? void 0 : h.errors.length) > 0),
          U = (0, j.useCallback)(
            (0, I._)(function () {
              var e, t, o, l, u;
              return (0, Z.Jh)(this, function (f) {
                switch (f.label) {
                  case 0:
                    if (!O) return [3, 1];
                    return (
                      P({
                        domain: c,
                        manifestAccessToken: d,
                        onSuccess: n,
                        onError: function (e) {
                          return b(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest."
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!R) return [3, 2];
                    return (
                      (0, J.addToCachedInstalledPlugins)(m, D), r(m), [3, 15]
                    );
                  case 2:
                    if (!E) return [3, 8];
                    if (
                      !(null === (e = M.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        b("Please provide your service access token."), [2]
                      );
                    f.label = 3;
                  case 3:
                    return (
                      f.trys.push([3, 5, 6, 7]),
                      C(!0),
                      [
                        4,
                        q.ZP.setPluginServiceHttpToken({
                          id: m.id,
                          serviceAccessToken: M.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return i(f.sent().verification_tokens), [3, 7];
                  case 5:
                    return f.sent(), b("Error setting access token."), [3, 7];
                  case 6:
                    return C(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!G) return [3, 14];
                    if (
                      ((l =
                        null === (t = _.current) || void 0 === t
                          ? void 0
                          : t.value),
                      (u =
                        null === (o = A.current) || void 0 === o
                          ? void 0
                          : o.value),
                      !l || !u)
                    )
                      return b("Please provide your OAuth credentials."), [2];
                    f.label = 9;
                  case 9:
                    return (
                      f.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        q.ZP.setPluginOAuthClientCredentials({
                          id: m.id,
                          clientId: _.current.value,
                          clientSecret: A.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return i(f.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      f.sent(), b("Error setting OAuth credentials."), [3, 13]
                    );
                  case 12:
                    return C(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    m ? a(m) : s(), (f.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [E, G, m, c, d, O, R, D, P, n, i, a, r, s]
          );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: s,
          type: "success",
          title: (0, g.jsx)(k.Z, (0, l._)({}, ea.foundPluginTitle)),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: O
              ? o.formatMessage(ea.refetchManifestButtonText)
              : R
              ? o.formatMessage(ea.installLocalhostPluginButtonText)
              : o.formatMessage(ea.nextButtonText),
            color: "primary",
            onClick: U,
            loading: w || S,
          }),
          secondaryButton:
            (O || E || G) &&
            (0, g.jsx)(z.ZP.Button, {
              title: o.formatMessage(ea.cancelButtonText),
              color: "neutral",
              onClick: s,
            }),
          children: (0, g.jsxs)(et, {
            children: [
              (0, g.jsx)(ei.rC, { manifestValidationInfo: x }),
              h && (0, g.jsx)(ei.q6, { apiValidationInfo: h }),
              m && (0, g.jsx)(X.Z, { plugin: m }),
              E &&
                !O &&
                (0, g.jsxs)("div", {
                  children: [
                    (0, g.jsx)("div", {
                      className: "text-sm",
                      children: (0, g.jsx)(
                        k.Z,
                        (0, l._)({}, ea.enterServiceAccessTokenLabel)
                      ),
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-2",
                      children: (0, g.jsx)(L.Z, {
                        ref: M,
                        name: "serviceToken",
                        placeholder: "Service access token",
                        autoComplete: "off",
                        onPressEnter: U,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              G &&
                !O &&
                (0, g.jsxs)("div", {
                  children: [
                    (0, g.jsx)("div", {
                      className: "text-sm",
                      children: (0, g.jsx)(
                        k.Z,
                        (0, l._)({}, ea.enterOAuthCredentialsLabel)
                      ),
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-2",
                      children: (0, g.jsx)(L.Z, {
                        ref: _,
                        name: "clientId",
                        placeholder: "Client ID",
                        autoComplete: "off",
                        onPressEnter: U,
                        autoFocus: !0,
                      }),
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-2",
                      children: (0, g.jsx)(L.Z, {
                        ref: A,
                        type: "password",
                        name: "clientSecret",
                        placeholder: "Client secret",
                        autoComplete: "off",
                        onPressEnter: U,
                      }),
                    }),
                  ],
                }),
              v && (0, g.jsx)(en, { children: v }),
            ],
          }),
        });
      }
      function ec(e) {
        var t = e.plugin,
          n = e.manifestAccessToken,
          i = e.verificationTokens,
          a = e.onReadyToInstall,
          r = e.onClose,
          s = (0, Q.Z)(),
          o = (0, u._)((0, j.useState)(), 2),
          c = o[0],
          d = o[1],
          f = (0, u._)((0, j.useState)(!1), 2),
          h = f[0],
          m = f[1],
          x = (0, j.useCallback)(
            (0, I._)(function () {
              var e, r;
              return (0, Z.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      s.trys.push([0, 2, 3, 4]),
                      m(!0),
                      [
                        4,
                        q.ZP.scrapePluginManifest({
                          domain: t.domain,
                          manifestAccessToken: n,
                        }),
                      ]
                    );
                  case 1:
                    if ((e = s.sent().plugin)) {
                      for (var o in ((r =
                        "service_http" === e.manifest.auth.type ||
                        "oauth" === e.manifest.auth.type
                          ? e.manifest.auth.verification_tokens
                          : {}),
                      i))
                        if (i[o] !== r[o])
                          return (
                            d(
                              'Please add the "'.concat(
                                o,
                                '" token to your manifest file.'
                              )
                            ),
                            [2]
                          );
                      a(e);
                    } else d("Error creating plugin.");
                    return [3, 4];
                  case 2:
                    return s.sent(), d("Error creating plugin."), [3, 4];
                  case 3:
                    return m(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [t, n, i, a]
          );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: r,
          type: "success",
          title: (0, g.jsx)(k.Z, (0, l._)({}, ea.addVerificationTokenTitle)),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: s.formatMessage(ea.verifyTokensButtonText),
            color: "primary",
            onClick: x,
            loading: h,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: s.formatMessage(ea.addTokensLaterButtonText),
            color: "neutral",
            onClick: r,
          }),
          children: (0, g.jsxs)(et, {
            children: [
              (0, g.jsx)(X.Z, { plugin: t }),
              (0, g.jsx)("div", {
                className: "text-sm",
                children: (0, g.jsx)(
                  k.Z,
                  (0, l._)({}, ea.addVerificationTokensText)
                ),
              }),
              (0, g.jsx)("pre", {
                className: "text-sm",
                children: JSON.stringify(i, null),
              }),
              c && (0, g.jsx)(en, { children: c }),
            ],
          }),
        });
      }
      function ed(e) {
        var t = e.plugin,
          n = e.onClickInstall,
          i = e.onClose,
          a = (0, Q.Z)(),
          r = (0, j.useCallback)(
            function () {
              n(t);
            },
            [t, n]
          );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: (0, g.jsx)(k.Z, (0, l._)({}, ea.readyToInstallTitle)),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: a.formatMessage(ea.installForMeButtonText),
            color: "primary",
            onClick: r,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: a.formatMessage(ea.installLaterButtonText),
            color: "neutral",
            onClick: i,
          }),
          children: (0, g.jsx)(et, {
            children: (0, g.jsx)("div", {
              className: "text-sm",
              children: (0, g.jsx)(
                k.Z,
                (0, c._)((0, l._)({}, ea.unverifiedPluginText), {
                  values: {
                    developersLink: function (e) {
                      return (0, g.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: e,
                      });
                    },
                    submitPluginLink: function (e) {
                      return (0, g.jsx)("a", {
                        href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-green-600",
                        children: e,
                      });
                    },
                  },
                })
              ),
            }),
          }),
        });
      }
      var eu = (0, w.vU)({
        title: {
          id: "InstallUnverifiedDisclaimerModal.title",
          defaultMessage: "Unverified plugin",
          description: "Title for the Install Unverified Disclaimer Modal",
        },
        continue: {
          id: "InstallUnverifiedDisclaimerModal.continue",
          defaultMessage: "Continue",
          description: "Primary action button for proceeding with installation",
        },
        cancel: {
          id: "InstallUnverifiedDisclaimerModal.cancel",
          defaultMessage: "Cancel",
          description:
            "Secondary action button for cancelling the installation",
        },
        warning: {
          id: "InstallUnverifiedDisclaimerModal.warning",
          defaultMessage:
            "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
          description: "Warning message about unverified plugins",
        },
      });
      function ef(e) {
        var t = e.onConfirm,
          n = e.onClose,
          i = (0, Q.Z)();
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: i.formatMessage(eu.title),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(eu.continue),
            color: "primary",
            onClick: t,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(eu.cancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, g.jsx)(et, {
            children: (0, g.jsx)(V, {
              children: (0, g.jsx)(O, {
                icon: "\uD83D\uDEA8",
                children: (0, g.jsx)(k.Z, (0, l._)({}, eu.warning)),
              }),
            }),
          }),
        });
      }
      function eh(e) {
        var t = e.plugin,
          n = e.onInstall,
          i = e.onClose,
          a = (0, u._)((0, j.useState)(!1), 2),
          r = a[0],
          s = a[1],
          o = (0, u._)((0, j.useState)(t), 2),
          l = o[0],
          c = o[1],
          d = (0, j.useCallback)(function () {
            s(!0);
          }, []);
        return l
          ? r
            ? (0, g.jsx)(em, { plugin: l, onInstall: n, onClose: i })
            : (0, g.jsx)(ef, { onConfirm: d, onClose: i })
          : (0, g.jsx)(eg, { onLoad: c, onClose: i });
      }
      function eg(e) {
        var t = e.onLoad,
          n = e.onClose,
          i = (0, Q.Z)(),
          a = (0, j.useRef)(null),
          r = (0, u._)((0, j.useState)(!1), 2),
          s = r[0],
          o = r[1],
          c = (0, u._)((0, j.useState)(), 2),
          d = c[0],
          f = c[1];
        (0, j.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = a.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var h = (0, j.useCallback)(
          (0, I._)(function () {
            var e, n, i;
            return (0, Z.Jh)(this, function (r) {
              switch (r.label) {
                case 0:
                  if (
                    !(n =
                      null === (e = a.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return f("Please provide a URL."), [2];
                  if ((0, T.NB)(n))
                    return (
                      f(
                        'To add a localhost plugin, please go to "Develop your own plugin."'
                      ),
                      [2]
                    );
                  r.label = 1;
                case 1:
                  return (
                    r.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, q.ZP.getPluginByDomain({ domain: n })]
                  );
                case 2:
                  return (
                    (i = r.sent()) ? t(i) : f("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return r.sent(), f("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [t, o, f]
        );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: i.formatMessage(ex.installUnverifiedPluginTitle),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(ex.findPlugin),
            color: "primary",
            onClick: h,
            loading: s,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(ex.cancel),
            color: "neutral",
            onClick: n,
          }),
          children: (0, g.jsxs)(et, {
            children: [
              (0, g.jsx)("div", {
                children: (0, g.jsx)(k.Z, (0, l._)({}, ex.pleaseProvideDomain)),
              }),
              (0, g.jsx)(L.Z, {
                ref: a,
                name: "url",
                placeholder: "openai.com",
                onPressEnter: h,
              }),
              d && (0, g.jsx)(en, { children: d }),
            ],
          }),
        });
      }
      function em(e) {
        var t = e.plugin,
          n = e.onInstall,
          i = e.onClose,
          a = (0, Q.Z)(),
          r = (0, u._)((0, j.useState)(), 2),
          s = r[0],
          o = r[1],
          d = (0, u._)((0, j.useState)(!1), 2),
          f = d[0],
          h = d[1],
          m = (0, j.useRef)(null),
          x = (0, J.useInstallPlugin)({
            onSuccess: function (e) {
              n(e), i();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          p = t.manifest.name_for_human,
          v = "user_http" === t.manifest.auth.type,
          b = "oauth" === t.manifest.auth.type,
          y = (0, j.useCallback)(
            (0, I._)(function () {
              return (0, Z.Jh)(this, function (e) {
                if (b) (0, J.doOauthRedirect)(t);
                else
                  try {
                    h(!0), x(t.id);
                  } catch (e) {
                    o("Couldn't install plugin.");
                  } finally {
                    h(!1);
                  }
                return [2];
              });
            }),
            [t, b, x]
          );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: a.formatMessage(ex.unverifiedPluginTitle),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: b
              ? a.formatMessage(ex.loginWithPlugin, { pluginName: p })
              : a.formatMessage(ex.installPlugin),
            color: "primary",
            onClick: y,
            loading: f,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: a.formatMessage(ex.cancel),
            color: "neutral",
            onClick: i,
          }),
          children: (0, g.jsxs)(et, {
            children: [
              (0, g.jsx)(X.Z, { plugin: t }),
              v &&
                (0, g.jsxs)("div", {
                  children: [
                    (0, g.jsx)("div", {
                      className: "text-sm",
                      children:
                        t.manifest.auth.instructions ||
                        (0, g.jsx)(k.Z, (0, l._)({}, ex.enterHttpAccessToken)),
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-2",
                      children: (0, g.jsx)(L.Z, {
                        ref: m,
                        type: "password",
                        name: "token",
                        placeholder: "Enter your credentials",
                        autoComplete: "off",
                        onPressEnter: y,
                      }),
                    }),
                  ],
                }),
              b &&
                (0, g.jsx)("div", {
                  children: (0, g.jsx)(
                    k.Z,
                    (0, c._)((0, l._)({}, ex.youWillBeRedirected), {
                      values: {
                        pluginName: (0, g.jsx)("span", {
                          className: "font-medium",
                          children: p,
                        }),
                      },
                    })
                  ),
                }),
              s && (0, g.jsx)(en, { children: s }),
            ],
          }),
        });
      }
      var ex = (0, w.vU)({
          installUnverifiedPluginTitle: {
            id: "InstallPluginModal.installUnverifiedPluginTitle",
            description: "Title for the Install an Unverified Plugin modal",
            defaultMessage: "Install an unverified plugin",
          },
          pleaseProvideDomain: {
            id: "InstallPluginModal.pleaseProvideDomain",
            description:
              "Text asking the user to provide the website domain of the unverified plugin",
            defaultMessage:
              "Please provide the website domain of the unverified plugin you'd like to install.",
          },
          findPlugin: {
            id: "InstallPluginModal.findPlugin",
            description: "Text for the Find Plugin button",
            defaultMessage: "Find plugin",
          },
          cancel: {
            id: "InstallPluginModal.cancel",
            description: "Text for the Cancel button",
            defaultMessage: "Cancel",
          },
          unverifiedPluginTitle: {
            id: "InstallPluginModal.unverifiedPluginTitle",
            description: "Title for the Unverified Plugin modal",
            defaultMessage: "Unverified plugin",
          },
          loginWithPlugin: {
            id: "InstallPluginModal.loginWithPlugin",
            description: "Text for the Log in with plugin button",
            defaultMessage: "Log in with {pluginName}",
          },
          installPlugin: {
            id: "InstallPluginModal.installPlugin",
            description: "Text for the Install Plugin button",
            defaultMessage: "Install plugin",
          },
          enterHttpAccessToken: {
            id: "InstallPluginModal.enterHttpAccessToken",
            description: "Text asking user to enter their HTTP access token",
            defaultMessage: "Enter your HTTP access token below:",
          },
          youWillBeRedirected: {
            id: "InstallPluginModal.youWillBeRedirected",
            description:
              "Text informing the user they will be redirected to the plugin's login page",
            defaultMessage: "You will be redirected to {pluginName} to log in.",
          },
        }),
        ep = n(96237),
        ev = n(48133),
        eb = n(42798),
        ej = n(62682),
        ey = n(1491),
        ek = n(94486),
        ew = n(89678),
        eC = n.n(ew),
        eM = n(96096),
        e_ = n(56457),
        eA = n(21613);
      ((i = r || (r = {}))[(i.All = 0)] = "All"),
        (i[(i.Installed = 1)] = "Installed"),
        ((a = s || (s = {})).New = "newly_added"),
        (a.Popular = "most_popular");
      var eN = [
          { id: s.Popular, title: "Popular" },
          { id: s.New, title: "New" },
          { id: r.All, title: "All" },
          { id: r.Installed, title: "Installed" },
        ],
        eT = n(64502),
        eP = (0, w.vU)({
          prev: {
            id: "PaginationControls.prev",
            defaultMessage: "Prev",
            description:
              "Label for the previous page button in the pagination controls",
          },
          next: {
            id: "PaginationControls.next",
            defaultMessage: "Next",
            description:
              "Label for the next page button in the pagination controls",
          },
        });
      function eS(e) {
        var t = e.page,
          n = e.numPages,
          i = e.goToPage,
          a = t > 0,
          r = t < n - 1,
          s = (0, j.useCallback)(
            function () {
              i(Math.max(t - 1, 0));
            },
            [t, i]
          ),
          o = (0, j.useCallback)(
            function () {
              i(Math.min(t + 1, n - 1));
            },
            [t, n, i]
          ),
          c = [],
          d = !0,
          u = !1,
          f = void 0;
        try {
          for (
            var h,
              m = (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 10,
                  i = Math.max(0, t - n + 1);
                if (0 === i) return eI(0, t);
                var a = eI(0, e),
                  r = eI(e + 1, t);
                if (i < r.length - 1)
                  r.splice(Math.floor((r.length - i) / 2), i, -1);
                else if (i < a.length - 1)
                  a.splice(Math.floor((a.length - i) / 2), i, -1);
                else {
                  var s = Math.min(r.length - 3, i),
                    o = i - s + 1;
                  r.splice(Math.floor((r.length - s) / 2), s, -1),
                    a.splice(Math.floor((a.length - o) / 2), o, -2);
                }
                return (0, eT._)(a).concat([e], (0, eT._)(r));
              })(t, n)[Symbol.iterator]();
            !(d = (h = m.next()).done);
            d = !0
          )
            !(function () {
              var e = h.value;
              e < 0
                ? c.push(
                    (0, g.jsx)(
                      "div",
                      {
                        role: "button",
                        className: "flex h-5 w-5 items-center justify-center",
                        children: "…",
                      },
                      "ellipsis-".concat(e)
                    )
                  )
                : c.push(
                    (0, g.jsx)(
                      eK,
                      {
                        role: "button",
                        className: (0, v.default)(
                          "flex h-5 w-5 items-center justify-center",
                          e === t &&
                            "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"
                        ),
                        onClick: function () {
                          return i(e);
                        },
                        children: e + 1,
                      },
                      e
                    )
                  );
            })();
        } catch (e) {
          (u = !0), (f = e);
        } finally {
          try {
            d || null == m.return || m.return();
          } finally {
            if (u) throw f;
          }
        }
        return (0, g.jsxs)("div", {
          className:
            "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
          children: [
            (0, g.jsxs)(eK, {
              role: "button",
              className: (0, v.default)(
                "flex items-center",
                !a && "opacity-50"
              ),
              onClick: s,
              $disabled: !a,
              children: [
                (0, g.jsx)(y.YFh, { className: "icon-sm" }),
                (0, g.jsx)(k.Z, (0, l._)({}, eP.prev)),
              ],
            }),
            c,
            (0, g.jsxs)(eK, {
              role: "button",
              className: (0, v.default)(
                "flex items-center",
                !r && "opacity-50"
              ),
              onClick: o,
              $disabled: !r,
              children: [
                (0, g.jsx)(k.Z, (0, l._)({}, eP.next)),
                (0, g.jsx)(y.Tfp, { className: "icon-sm" }),
              ],
            }),
          ],
        });
      }
      function eI(e, t) {
        return Array.from({ length: t - e }, function (t, n) {
          return n + e;
        });
      }
      var eZ = (0, w.vU)({
        title: {
          id: "RequiresMfaModal.title",
          defaultMessage: "Enable two-factor authentication",
          description:
            "Title for the modal to enable two-factor authentication",
        },
        enableMfaButton: {
          id: "RequiresMfaModal.enableMfaButton",
          defaultMessage: "Enable two-factor authentication",
          description:
            "Label for the button to enable two-factor authentication",
        },
        cancelButton: {
          id: "RequiresMfaModal.cancelButton",
          defaultMessage: "Cancel",
          description: "Label for the cancel button",
        },
        disclaimer: {
          id: "RequiresMfaModal.disclaimer",
          defaultMessage:
            "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
          description:
            "Disclaimer text informing the user that the plugin requires two-factor authentication",
        },
      });
      function ez(e) {
        var t = e.onClose,
          n = (0, ek.S)().setupMfa,
          i = (0, Q.Z)();
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: i.formatMessage(eZ.title),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(eZ.enableMfaButton),
            color: "primary",
            onClick: n,
          }),
          secondaryButton: (0, g.jsx)(z.ZP.Button, {
            title: i.formatMessage(eZ.cancelButton),
            color: "neutral",
            onClick: t,
          }),
          children: (0, g.jsx)(et, {
            children: (0, g.jsx)(V, {
              children: (0, g.jsx)(O, {
                icon: "\uD83D\uDEA8",
                children: (0, g.jsx)(k.Z, (0, l._)({}, eZ.disclaimer)),
              }),
            }),
          }),
        });
      }
      function eB() {
        var e = (0, f._)([
          "text-sm text-black/70 dark:text-white/70 whitespace-nowrap ",
          "",
        ]);
        return (
          (eB = function () {
            return e;
          }),
          e
        );
      }
      function eL() {
        var e = (0, f._)([
          "hidden h-4 border-l border-black/30 dark:border-white/30 sm:block",
        ]);
        return (
          (eL = function () {
            return e;
          }),
          e
        );
      }
      var eD =
          ((o = {}),
          (0, ep._)(o, ey._G.Mobile, 8),
          (0, ep._)(o, ey._G.Small, 4),
          (0, ep._)(o, ey._G.Medium, 4),
          (0, ep._)(o, ey._G.Large, 6),
          (0, ep._)(o, ey._G.XLarge, 8),
          o),
        eR = (0, w.vU)({
          title: {
            id: "PluginStoreModal.title",
            defaultMessage: "Plugin store",
            description: "Title of the plugin store",
          },
          searchPlaceholder: {
            id: "PluginStoreModal.searchPlaceholder",
            defaultMessage: "Search plugins",
            description: "Placeholder text for the plugin store search bar",
          },
          noSearchResultsTitle: {
            id: "PluginStoreModal.noSearchResults",
            defaultMessage: 'No plugins found for "{query}"',
            description:
              "Message shown when no plugins are found for a search query",
          },
          noSearchResultsHint: {
            id: "PluginStoreModal.noSearchResultsHint",
            defaultMessage: "Try a different query or category",
            description:
              "Hint shown when no plugins are found for a search query",
          },
          installUnverifiedPlugin: {
            id: "PluginStoreModal.installUnverifiedPlugin",
            defaultMessage: "Install an unverified plugin",
            description: "Link to dialog to install an unverified plugin",
          },
          developPlugin: {
            id: "PluginStoreModal.developPlugin",
            defaultMessage: "Develop your own plugin",
            description: "Link to dialog to develop your own plugin",
          },
          aboutPlugins: {
            id: "PluginStoreModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Link to learn more about plugins",
          },
          install: {
            id: "PluginStoreModal.card.install",
            defaultMessage: "Install",
            description: "Button to install a plugin",
          },
          uninstall: {
            id: "PluginStoreModal.card.uninstall",
            defaultMessage: "Uninstall",
            description: "Button to uninstall a plugin",
          },
          installing: {
            id: "PluginStoreModal.card.installing",
            defaultMessage: "Installing",
            description: "Status label when installing a plugin",
          },
          uninstalling: {
            id: "PluginStoreModal.card.uninstalling",
            defaultMessage: "Uninstalling",
            description: "Status label when uninstalling a plugin",
          },
          developerInfo: {
            id: "PluginStoreModal.card.developerInfo",
            defaultMessage: "Developer info",
            description: "Label for plugin developer information",
          },
        }),
        eE = s.Popular;
      function eG(e) {
        var t,
          n,
          i,
          a = e.onInstallWithAuthRequired,
          s = e.onClickInstallDeveloper,
          o = e.onClickDevelop,
          c = e.onClickAbout,
          d = e.onClose,
          f = (0, Q.Z)(),
          h = (0, K.hz)(),
          m = (0, u._)((0, j.useState)(eE), 2),
          x = m[0],
          p = m[1],
          v = (0, u._)((0, j.useState)(""), 2),
          b = v[0],
          w = v[1],
          C = (0, u._)((0, j.useState)(""), 2),
          M = C[0],
          _ = C[1],
          A = ((n = (t = (0, eA.C)()).isLoading),
          (i = t.installedPlugins),
          {
            availableFilters: (0, j.useMemo)(
              function () {
                return eN.filter(function (e) {
                  return e.id !== r.Installed || i.length > 0;
                });
              },
              [i]
            ),
            isLoading: n,
          }).availableFilters;
        (0, j.useEffect)(
          function () {
            A.some(function (e) {
              return e.id === x;
            }) || p(eE);
          },
          [x, A]
        );
        var N = (0, j.useCallback)(
          eC()(function (e) {
            _(e);
          }, 300),
          []
        );
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: d,
          size: "custom",
          className:
            "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
          type: "success",
          title: f.formatMessage(eR.title),
          closeButton: (0, g.jsx)(z.ZP.CloseButton, { onClose: d }),
          children: (0, g.jsxs)(et, {
            children: [
              A.length > 1 &&
                (0, g.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    A.map(function (e) {
                      return (0, g.jsx)(
                        eU,
                        {
                          selected: x === e.id,
                          onClick: function () {
                            p(e.id);
                          },
                          children: e.title,
                        },
                        e.id
                      );
                    }),
                    (0, g.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, g.jsx)("div", {
                          className:
                            "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                          children: (0, g.jsx)(y.jRj, {
                            className:
                              "icon-md text-gray-500 dark:text-gray-400",
                          }),
                        }),
                        (0, g.jsx)(L.Z, {
                          className: "pl-10",
                          autoFocus: !0,
                          type: "search",
                          placeholder: f.formatMessage(eR.searchPlaceholder),
                          value: b,
                          onChange: function (e) {
                            w(e.target.value), p(r.All), N(e.target.value);
                          },
                          name: "search",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, g.jsx)(eO, {
                filter: x,
                query: M,
                onInstallWithAuthRequired: a,
                children: (0, g.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 sm:flex-row",
                  children: [
                    h.has("tools3_dev") &&
                      (0, g.jsxs)(g.Fragment, {
                        children: [
                          (0, g.jsx)(eK, {
                            onClick: s,
                            children: (0, g.jsx)(
                              k.Z,
                              (0, l._)({}, eR.installUnverifiedPlugin)
                            ),
                          }),
                          (0, g.jsx)(eW, {}),
                          (0, g.jsx)(eK, {
                            onClick: o,
                            children: (0, g.jsx)(
                              k.Z,
                              (0, l._)({}, eR.developPlugin)
                            ),
                          }),
                          (0, g.jsx)(eW, {}),
                        ],
                      }),
                    (0, g.jsx)(eK, {
                      onClick: c,
                      children: (0, g.jsx)(k.Z, (0, l._)({}, eR.aboutPlugins)),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function eO(e) {
        var t = e.filter,
          n = e.query,
          i = e.onInstallWithAuthRequired,
          a = e.children,
          s = eD[(0, ey.dQ)()],
          o = (0, u._)((0, j.useState)(0), 2),
          l = o[0],
          c = o[1],
          d = (function (e) {
            var t = e.filter,
              n = e.query,
              i = e.page,
              a = e.pageSize,
              s = (0, e_.Z)({
                category: (function (e) {
                  if (e !== r.All && e !== r.Installed) return e;
                })(t),
                search: n,
                offset: a * i,
                limit: a,
              }),
              o = s.data,
              l = s.isLoading,
              c = (0, eA.C)(),
              d = c.installedPlugins,
              u = c.isLoading,
              f = (0, j.useMemo)(
                function () {
                  return "" !== n
                    ? d
                        .map(function (e) {
                          return {
                            plugin: e,
                            score: (function (e, t) {
                              var n = t.toLowerCase(),
                                i = n.trim().split(/\s+/),
                                a =
                                  e.manifest.description_for_human.toLowerCase(),
                                r = e.manifest.name_for_human.toLowerCase(),
                                s = 0;
                              if (r === n || e.domain.toLowerCase() === n)
                                return 1e3;
                              if (r.startsWith(n)) return 500;
                              if (r.includes(n)) return 100;
                              var o = !0,
                                l = !1,
                                c = void 0;
                              try {
                                for (
                                  var d, u = i[Symbol.iterator]();
                                  !(o = (d = u.next()).done);
                                  o = !0
                                ) {
                                  var f = d.value;
                                  if (r.startsWith(f)) s += 50;
                                  else if (r.includes(f)) s += 10;
                                  else {
                                    if (!a.includes(f)) return 0;
                                    s += 1;
                                  }
                                }
                              } catch (e) {
                                (l = !0), (c = e);
                              } finally {
                                try {
                                  o || null == u.return || u.return();
                                } finally {
                                  if (l) throw c;
                                }
                              }
                              return s;
                            })(e, n),
                          };
                        })
                        .filter(function (e) {
                          return e.score > 0;
                        })
                        .sort(function (e, t) {
                          return t.score - e.score;
                        })
                        .map(function (e) {
                          return e.plugin;
                        })
                    : d.sort(function (e, t) {
                        return e.manifest.name_for_human.localeCompare(
                          t.manifest.name_for_human
                        );
                      });
                },
                [d, n]
              );
            if (t === r.Installed) {
              var h,
                g,
                m,
                x,
                p,
                v,
                b =
                  ((g = (h = { page: i, items: f, pageSize: a }).page),
                  (m = h.items),
                  (x = h.pageSize),
                  (p = Math.ceil(m.length / x)),
                  (v = g * x),
                  { pagesTotal: p, pageItems: m.slice(v, v + x) });
              return {
                isLoading: u,
                items: b.pageItems,
                pagesTotal: b.pagesTotal,
              };
            }
            var y = null != o ? o : { count: void 0, items: void 0 },
              k = y.count;
            return {
              isLoading: l,
              items: y.items,
              pagesTotal: void 0 !== k ? Math.ceil(k / a) : void 0,
            };
          })({ pageSize: s, filter: t, query: n, page: l }),
          f = d.isLoading,
          h = d.items,
          m = d.pagesTotal;
        (0, j.useEffect)(
          function () {
            c(0);
          },
          [t, n]
        );
        var x = (0, u._)((0, j.useState)(!1), 2),
          p = x[0],
          v = x[1];
        return p
          ? (0, g.jsx)(ez, {
              onClose: function () {
                v(!1);
              },
            })
          : (0, g.jsxs)(g.Fragment, {
              children: [
                (0, g.jsx)(eF, {
                  plugins: null != h ? h : [],
                  numSkeletons: s,
                  query: n,
                  isLoading: f,
                  onInstallWithAuthRequired: i,
                  onRequestMfa: function () {
                    return v(!0);
                  },
                }),
                (0, g.jsxs)("div", {
                  className:
                    "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                  children: [
                    (0, g.jsx)("div", {
                      className:
                        "max-lg:justify-center flex flex-1 justify-start",
                      children:
                        void 0 !== m &&
                        m > 1 &&
                        (0, g.jsx)(eS, { page: l, numPages: m, goToPage: c }),
                    }),
                    a,
                  ],
                }),
              ],
            });
      }
      function eU(e) {
        var t = e.selected,
          n = e.onClick,
          i = e.children;
        return (0, g.jsx)(ev.z, {
          color: t ? "light" : "neutral",
          className: (0, v.default)(
            "focus:ring-0",
            t && "hover:bg-gray-200",
            !t && "text-black/50"
          ),
          onClick: n,
          children: i,
        });
      }
      function eF(e) {
        var t = e.plugins,
          n = e.numSkeletons,
          i = e.isLoading,
          a = e.onInstallWithAuthRequired,
          r = e.onRequestMfa,
          s = e.query;
        if (0 === t.length && !i && s)
          return (0, g.jsxs)("div", {
            className:
              "flex h-[404px] flex-col items-center justify-center gap-4",
            children: [
              (0, g.jsx)("div", {
                className: "text-lg font-medium",
                children: (0, g.jsx)(
                  k.Z,
                  (0, c._)((0, l._)({}, eR.noSearchResultsTitle), {
                    values: { query: s },
                  })
                ),
              }),
              (0, g.jsx)("div", {
                className: "text-sm text-black/50",
                children: (0, g.jsx)(k.Z, (0, l._)({}, eR.noSearchResultsHint)),
              }),
            ],
          });
        var o = i
          ? Array(n)
              .fill(0)
              .map(function (e, t) {
                return (0, g.jsx)(eV, {}, t);
              })
          : t.map(function (e) {
              return (0,
              g.jsx)(eH, { plugin: e, onInstallWithAuthRequired: a, onRequestMfa: r }, e.id);
            });
        return (0, g.jsx)("div", {
          className:
            "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
          children: o,
        });
      }
      function eH(e) {
        var t,
          n,
          i = e.plugin,
          a = e.onInstallWithAuthRequired,
          r = e.onRequestMfa,
          s = (0, u._)((0, j.useState)(!1), 2),
          o = s[0],
          c = s[1],
          d = (0, u._)((0, j.useState)(!1), 2),
          f = d[0],
          h = d[1],
          m = (0, J.useInstallPlugin)({
            onSuccess: function (e) {
              (0, S.wu)(e.id);
            },
            onError: function (e) {
              console.error(e),
                N.m.danger(
                  "Error installing ".concat(i.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              c(!1);
            },
          }),
          x = (0, J.useUninstallPlugin)({
            onSuccess: function () {},
            onError: function (e) {
              console.error(e),
                N.m.danger(
                  "Error uninstalling ".concat(i.manifest.name_for_human, ".")
                );
            },
            onSettled: function () {
              h(!1);
            },
          }),
          p = (0, Y.kP)().session,
          v = (0, K.hz)(),
          b = (0, Q.Z)(),
          w = (0, ek.S)().isUsernamePassword,
          C = (0, j.useCallback)(
            function () {
              var e,
                t = i.manifest.auth.type;
              if (
                !("none" === t || "service_http" === t) &&
                !(null == p
                  ? void 0
                  : null === (e = p.user) || void 0 === e
                  ? void 0
                  : e.mfa) &&
                v.has(ej.i) &&
                w
              ) {
                r();
                return;
              }
              "oauth" === t
                ? (0, J.doOauthRedirect)(i)
                : "user_http" === t
                ? a(i)
                : (c(!0), m(i.id));
            },
            [i, m, a, r, w, p, v]
          ),
          _ = (0, j.useCallback)(
            function () {
              h(!0), x(i.id);
            },
            [i, x]
          );
        return (
          (n =
            o || f
              ? (0, g.jsxs)(ev.z, {
                  color: "light",
                  className: "bg-green-100 hover:bg-green-100",
                  children: [
                    o
                      ? b.formatMessage(eR.installing)
                      : b.formatMessage(eR.uninstalling),
                    (0, g.jsx)(eb.Z, {}),
                  ],
                })
              : (
                  null === (t = i.user_settings) || void 0 === t
                    ? void 0
                    : t.is_installed
                )
              ? (0, g.jsxs)(ev.z, {
                  color: "light",
                  className: "hover:bg-gray-200",
                  onClick: _,
                  children: [
                    (0, g.jsx)(k.Z, (0, l._)({}, eR.uninstall)),
                    (0, g.jsx)(y.$Rx, { className: "icon-sm" }),
                  ],
                })
              : (0, g.jsxs)(ev.z, {
                  onClick: C,
                  children: [
                    (0, g.jsx)(k.Z, (0, l._)({}, eR.install)),
                    (0, g.jsx)(y.wzc, { className: "icon-sm" }),
                  ],
                })),
          (0, g.jsx)(eq, {
            logo: (0, g.jsx)(M.Z, {
              url: i.manifest.logo_url,
              name: i.manifest.name_for_human,
              size: "100%",
              large: !0,
            }),
            tag: (0, T.cf)(i)
              ? (0, g.jsx)(eM.Aj, {})
              : "approved" !== i.status
              ? (0, g.jsx)(eM.i$, {})
              : void 0,
            title: (0, g.jsx)("div", {
              className: "max-w-full truncate text-lg leading-6",
              children: i.manifest.name_for_human,
            }),
            button: n,
            description: i.manifest.description_for_human,
            developerInfo: (0, g.jsxs)("div", {
              className: "flex items-center gap-1.5",
              children: [
                (0, g.jsx)(k.Z, (0, l._)({}, eR.developerInfo)),
                (0, g.jsx)("a", {
                  href: i.manifest.legal_info_url,
                  target: "_blank",
                  rel: "noreferrer",
                  children: (0, g.jsx)(y.RsK, { className: "icon-xs" }),
                }),
                (0, g.jsx)("a", {
                  href: "mailto:".concat(i.manifest.contact_email),
                  children: (0, g.jsx)(y.Imn, { className: "icon-xs" }),
                }),
              ],
            }),
          })
        );
      }
      function eV() {
        return (0, g.jsx)(eq, {
          logo: (0, g.jsx)("div", {
            className: "h-full w-full rounded-[5px] bg-gray-300",
          }),
          title: (0, g.jsx)("div", {
            className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100",
          }),
          button: (0, g.jsx)("div", {
            className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200",
          }),
          description: (0, g.jsxs)("div", {
            className: "flex flex-col gap-1.5",
            children: [
              (0, g.jsx)("div", {
                className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100",
              }),
              (0, g.jsx)("div", {
                className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100",
              }),
              (0, g.jsx)("div", {
                className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100",
              }),
            ],
          }),
          developerInfo: (0, g.jsx)("div", {
            className: "h-full w-[120px] rounded-[5px] bg-gray-50",
          }),
        });
      }
      function eq(e) {
        var t = e.logo,
          n = e.tag,
          i = e.title,
          a = e.button,
          r = e.description,
          s = e.developerInfo;
        return (0, g.jsxs)("div", {
          className:
            "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
          children: [
            (0, g.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, g.jsx)("div", {
                  className: "h-[70px] w-[70px] shrink-0",
                  children: t,
                }),
                (0, g.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-col items-start justify-between",
                  children: [
                    null != n
                      ? (0, g.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [n, i],
                        })
                      : i,
                    a,
                  ],
                }),
              ],
            }),
            (0, g.jsx)("div", {
              className:
                "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
              children: r,
            }),
            (0, g.jsx)("div", {
              className: "h-[14px] text-xs text-black/60 dark:text-white/60",
              children: s,
            }),
          ],
        });
      }
      var eK = C.Z.button(eB(), function (e) {
          return e.$disabled
            ? "opacity-50 cursor-default"
            : "hover:text-black/50 dark:hover:text-white/50";
        }),
        eW = C.Z.div(eL()),
        eY = (0, w.vU)({
          aboutPlugins: {
            id: "StoreDisclaimerModal.aboutPlugins",
            defaultMessage: "About plugins",
            description: "Title for the About Plugins modal",
          },
          okButton: {
            id: "StoreDisclaimerModal.okButton",
            defaultMessage: "OK",
            description: "OK button text",
          },
          cancelButton: {
            id: "StoreDisclaimerModal.cancelButton",
            defaultMessage: "Cancel",
            description: "Cancel button text",
          },
          thirdPartyWarning: {
            id: "StoreDisclaimerModal.thirdPartyWarning",
            defaultMessage:
              "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
            description: "Warning about third-party applications and trust",
          },
          externalAppsWarning: {
            id: "StoreDisclaimerModal.externalAppsWarning",
            defaultMessage:
              "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation, Custom Instructions, and the country or state you're in to the plugin.",
            description: "Warning about external apps and data sharing",
          },
          autoUseWarning: {
            id: "StoreDisclaimerModal.autoUseWarning",
            defaultMessage:
              "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
            description:
              "Information about automatic plugin usage during conversations",
          },
        });
      function eQ(e) {
        var t = e.allowClose,
          n = e.onConfirm,
          i = e.onClose,
          a = (0, Q.Z)();
        return (0, g.jsx)(B.Z, {
          isOpen: !0,
          onClose: i,
          type: "success",
          title: a.formatMessage(eY.aboutPlugins),
          primaryButton: (0, g.jsx)(z.ZP.Button, {
            title: a.formatMessage(eY.okButton),
            color: "primary",
            onClick: n,
          }),
          secondaryButton:
            t &&
            (0, g.jsx)(z.ZP.Button, {
              title: a.formatMessage(eY.cancelButton),
              color: "neutral",
              onClick: i,
            }),
          children: (0, g.jsx)(et, {
            children: (0, g.jsxs)(V, {
              children: [
                (0, g.jsx)(O, {
                  icon: "\uD83D\uDEA8",
                  children: (0, g.jsx)(k.Z, (0, l._)({}, eY.thirdPartyWarning)),
                }),
                (0, g.jsx)(O, {
                  icon: "\uD83C\uDF10",
                  children: (0, g.jsx)(
                    k.Z,
                    (0, l._)({}, eY.externalAppsWarning)
                  ),
                }),
                (0, g.jsx)(O, {
                  icon: "\uD83E\uDDE0",
                  children: (0, g.jsx)(k.Z, (0, l._)({}, eY.autoUseWarning)),
                }),
              ],
            }),
          }),
        });
      }
      var eJ = P.F.HasSeenPluginDisclaimer;
      function eX(e) {
        var t = e.onInstall,
          n = e.onClose,
          i = (0, u._)((0, j.useState)(!!P.m.getItem(eJ)), 2),
          a = i[0],
          r = i[1],
          s = (0, u._)((0, j.useState)(!1), 2),
          o = s[0],
          l = s[1],
          c = (0, u._)((0, j.useState)(!1), 2),
          d = c[0],
          f = c[1],
          h = (0, u._)((0, j.useState)(), 2),
          m = h[0],
          x = h[1],
          p = (0, u._)((0, j.useState)(!1), 2),
          v = p[0],
          b = p[1],
          y = (0, j.useCallback)(function () {
            r(!0), l(!1), P.m.setItem(eJ, !0);
          }, []),
          k = (0, j.useCallback)(function (e) {
            x(e), f(!0);
          }, []),
          w = (0, j.useCallback)(function () {
            f(!0);
          }, []),
          C = (0, j.useCallback)(function () {
            b(!0);
          }, []),
          M = (0, j.useCallback)(function () {
            l(!0);
          }, []),
          _ = (0, j.useCallback)(
            function (e) {
              (0, S.wu)(e.id), n(), t(e);
            },
            [t, n]
          ),
          A = (0, j.useCallback)(
            function () {
              x(void 0), f(!1), n();
            },
            [n]
          ),
          N = (0, j.useCallback)(
            function () {
              b(!1), n();
            },
            [n]
          );
        return !a || o
          ? (0, g.jsx)(eQ, { allowClose: !a, onConfirm: y, onClose: n })
          : d
          ? (0, g.jsx)(eh, { plugin: m, onInstall: _, onClose: A })
          : v
          ? (0, g.jsx)(er, {
              onClickInstall: k,
              onInstallLocalhost: _,
              onClose: N,
            })
          : (0, g.jsx)(eG, {
              onInstallWithAuthRequired: k,
              onClickInstallDeveloper: w,
              onClickDevelop: C,
              onClickAbout: M,
              onClose: n,
            });
      }
      function e$() {
        var e = (0, f._)([
          "flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white",
        ]);
        return (
          (e$ = function () {
            return e;
          }),
          e
        );
      }
      function e0(e) {
        var t,
          n = e.theme,
          i = void 0 === n ? "default" : n,
          a = (0, u._)((0, j.useState)(!1), 2),
          r = a[0],
          s = a[1],
          o = (0, u._)((0, j.useState)(!1), 2),
          f = o[0],
          w = o[1],
          C = (0, b.useRouter)(),
          P = (0, eA.C)(),
          I = P.installedPlugins,
          Z = P.isLoading,
          z = (0, S.p0)(),
          B = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            if (!Z) {
              var e = C.query,
                t = e.loginAip,
                n = e.loginSuccess,
                i = (0, d._)(e, ["loginAip", "loginSuccess"]);
              if (t) {
                var a,
                  r,
                  s = I.find(function (e) {
                    return e.id === t;
                  });
                s && "true" === n
                  ? ((0, S.wu)(C.query.loginAip),
                    null === (a = B.current) || void 0 === a || a.open())
                  : N.m.warning(
                      "Couldn't log in with ".concat(
                        null !==
                          (r =
                            null == s ? void 0 : s.manifest.name_for_human) &&
                          void 0 !== r
                          ? r
                          : "plugin",
                        "."
                      )
                    ),
                  C.replace({ pathname: C.pathname, query: i });
              }
            }
          },
          [C, I, Z]
        );
        var L = (0, j.useCallback)(function () {
            var e;
            null === (e = B.current) || void 0 === e || e.open();
          }, []),
          D = (0, j.useCallback)(function () {
            s(!1);
          }, []),
          R = (0, u._)((0, j.useState)(z), 2),
          E = R[0],
          G = R[1],
          O = (0, j.useCallback)(
            function (e) {
              if (e.length > S.hZ)
                w(!0),
                  setTimeout(function () {
                    w(!1);
                  }, 600);
              else {
                var t = e.filter(function (e) {
                    return !z.find(function (t) {
                      return t.id === e.id;
                    });
                  }),
                  n = !0,
                  i = !1,
                  a = void 0;
                try {
                  for (
                    var r, s = S.iO[Symbol.iterator]();
                    !(n = (r = s.next()).done);
                    n = !0
                  ) {
                    var o = (function () {
                      var e = r.value,
                        n = z.find(function (t) {
                          return e.includes(t.domain);
                        });
                      if (n) {
                        var i = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === i;
                          });
                        if (a)
                          return (
                            N.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, " while ")
                                .concat(
                                  n.manifest.name_for_human,
                                  " is enabled."
                                )
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ("object" === (0, h._)(o)) return o.v;
                  }
                } catch (e) {
                  (i = !0), (a = e);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (i) throw a;
                  }
                }
                (0, S.dT)(
                  e.map(function (e) {
                    return e.id;
                  })
                );
              }
            },
            [z]
          ),
          U = (0, j.useCallback)(function (e) {
            var t;
            null === (t = B.current) || void 0 === t || t.close(),
              "store" === e && s(!0);
          }, []),
          F = (0, j.useCallback)(
            function () {
              G(z),
                p.m9.logEvent("chatgpt_plugin_chooser_opened", null, {
                  num_enabled_plugins: "".concat(z.length),
                }),
                m.A.logEvent(x.M.pluginChooserOpened, {
                  num_enabled_plugins: "".concat(z.length),
                });
            },
            [z]
          ),
          H = (0, j.useCallback)(
            function () {
              var e = E.filter(function (e) {
                  return !z.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                t = z.filter(function (e) {
                  return !E.find(function (t) {
                    return t.id === e.id;
                  });
                }),
                n = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var r, s = t[Symbol.iterator]();
                  !(n = (r = s.next()).done);
                  n = !0
                ) {
                  var o = r.value;
                  p.m9.logEvent("chatgpt_plugin_enabled", null, {
                    plugin_id: o.id,
                  }),
                    m.A.logEvent(x.M.pluginEnabled, { plugin_id: o.id });
                }
              } catch (e) {
                (i = !0), (a = e);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw a;
                }
              }
              var l = !0,
                c = !1,
                d = void 0;
              try {
                for (
                  var u, f = e[Symbol.iterator]();
                  !(l = (u = f.next()).done);
                  l = !0
                ) {
                  var h = u.value;
                  p.m9.logEvent("chatgpt_plugin_disabled", null, {
                    plugin_id: h.id,
                  }),
                    m.A.logEvent(x.M.pluginDisabled, { plugin_id: h.id });
                }
              } catch (e) {
                (c = !0), (d = e);
              } finally {
                try {
                  l || null == f.return || f.return();
                } finally {
                  if (c) throw d;
                }
              }
            },
            [z, E]
          ),
          V = (0, _.Ml)(),
          q = I.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: (0, T.cf)(e)
                ? (0, g.jsx)(eM.Aj, {})
                : "approved" !== e.status
                ? (0, g.jsx)(eM.i$, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          K = q.filter(function (e) {
            return z.find(function (t) {
              return t.id === e.value.id;
            });
          }),
          W = V
            ? (0, g.jsx)(
                k.Z,
                (0, c._)((0, l._)({}, e2.pluginsInstalled), {
                  values: { count: z.length },
                })
              )
            : (0, g.jsx)(
                k.Z,
                (0, c._)((0, l._)({}, e2.pluginsEnabled), {
                  values: { count: z.length },
                })
              );
        if (z.length > 0 && z.length < 6) {
          var Y = z.map(function (e, t) {
            return (0,
            g.jsx)(M.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 24 }, t);
          });
          W = (0, g.jsx)("div", { className: "flex gap-2", children: Y });
        }
        var Q = [{ id: "store", label: "Plugin store", icon: y.Rgz }];
        I.length > S.hZ &&
          (t = (0, g.jsx)(e1, {
            className: (0, v.default)(
              "transition-colors duration-300",
              f && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"
            ),
            children: (0, g.jsx)(
              k.Z,
              (0, c._)((0, l._)({}, e2.enabledPluginsLimit), {
                values: { enabledPlugins: z.length, maxEnabledPlugins: S.hZ },
              })
            ),
          }));
        var J = (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)(e1, {
              children: (0, g.jsx)(k.Z, (0, l._)({}, e2.loading)),
            }),
            (0, g.jsx)(A.ze, { showCheckbox: !0, theme: i }),
            (0, g.jsx)(A.ze, { showCheckbox: !0, theme: i }),
            (0, g.jsx)(A.ze, { showCheckbox: !0, theme: i }),
            (0, g.jsx)(A.ze, { showCheckbox: !0, theme: i }),
            (0, g.jsx)(A.ze, { showCheckbox: !0, theme: i }),
          ],
        });
        return (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)(A.ZP, {
              name: "Plugins",
              selectedOptions: K,
              selectedLabel: W,
              options: q,
              actions: Q,
              onChange: O,
              onAction: U,
              onOpen: F,
              onClose: H,
              dropdownRef: B,
              isLoading: Z,
              loadingState: J,
              header: t,
              theme: "mini" === i ? "mini" : "default",
            }),
            r && (0, g.jsx)(eX, { onInstall: L, onClose: D }),
          ],
        });
      }
      var e1 = C.Z.div(e$()),
        e2 = (0, w.vU)({
          pluginsEnabled: {
            id: "PluginChooser.pluginsEnabled",
            description: "Text shown with the number of enabled plugins.",
            defaultMessage:
              "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} enabled",
          },
          pluginsInstalled: {
            id: "PluginChooser.pluginsInstalled",
            description: "Text shown with the number of enabled plugins.",
            defaultMessage:
              "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} installed",
          },
          loading: {
            id: "PluginChooser.loading",
            description: "Text shown when plugin information is being loaded.",
            defaultMessage: "Loading...",
          },
          enabledPluginsLimit: {
            id: "PluginChooser.enabledPluginsLimit",
            description:
              "Text shown with the number of enabled plugins and the maximum limit.",
            defaultMessage: "{enabledPlugins}/{maxEnabledPlugins} Enabled",
          },
        });
    },
    96096: function (e, t, n) {
      n.d(t, {
        Aj: function () {
          return m;
        },
        i$: function () {
          return g;
        },
        nA: function () {
          return v;
        },
        uM: function () {
          return p;
        },
      });
      var i = n(39324),
        a = n(4337),
        r = n(35250),
        s = n(1454),
        o = n(94968),
        l = n(32004),
        c = n(21389);
      function d() {
        var e = (0, a._)([
          "flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, a._)([
          "flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var f = c.Z.div(d()),
        h = (0, o.vU)({
          unapprovedTag: {
            id: "TagComponents.unapprovedTag",
            defaultMessage: "Unverified",
            description:
              "Text shown inside the UnapprovedTagWithText component",
          },
          localhostTag: {
            id: "TagComponents.localhostTag",
            defaultMessage: "Localhost",
            description: "Text shown inside the LocalhostTagWithText component",
          },
        });
      function g() {
        return (0, r.jsx)(f, {
          children: (0, r.jsx)(s.OH, { className: "h-3 w-3 stroke-[2.5]" }),
        });
      }
      function m() {
        return (0, r.jsx)(f, {
          children: (0, r.jsx)(s.V7f, { className: "icon-xs" }),
        });
      }
      var x = c.Z.div(u());
      function p() {
        return (0, r.jsxs)(x, {
          children: [
            (0, r.jsx)(s.OH, { className: "h-3 w-3 stroke-[2.5]" }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)(l.Z, (0, i._)({}, h.unapprovedTag)),
            }),
          ],
        });
      }
      function v() {
        return (0, r.jsxs)(x, {
          children: [
            (0, r.jsx)(s.V7f, { className: "icon-xs" }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)(l.Z, (0, i._)({}, h.localhostTag)),
            }),
          ],
        });
      }
    },
    86585: function (e, t, n) {
      n.d(t, {
        i: function () {
          return g;
        },
      });
      var i = n(21722),
        a = n(20485),
        r = n(38104),
        s = n(86646),
        o = n(51505),
        l = n(82473),
        c = n(61236),
        d = n(56457),
        u = n(21613);
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, i._)(function (e) {
          var t;
          return (0, r.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = e.queryKey), [4, s.ZP.publicGetPluginsById({ ids: t })]
                );
              case 1:
                return [2, n.sent().items];
            }
          });
        })).apply(this, arguments);
      }
      function g(e) {
        var t, n, i;
        return null !==
          (t = ((n = (0, o.GR)(e)),
          (i = (0, l.NL)()),
          (0, c.a)({
            queryKey: n,
            queryFn: f,
            initialData: function () {
              var e =
                  null === (c = i.getQueryData(u.Z)) || void 0 === c
                    ? void 0
                    : c.items,
                t =
                  null === (f = i.getQueryData(d.V)) || void 0 === f
                    ? void 0
                    : f.items,
                r = [],
                s = !0,
                o = !1,
                l = void 0;
              try {
                for (
                  var c, f, h, g = n[Symbol.iterator]();
                  !(s = (h = g.next()).done);
                  s = !0
                ) {
                  var m = (function () {
                    var n,
                      i = h.value,
                      a =
                        null !==
                          (n =
                            null == e
                              ? void 0
                              : e.find(function (e) {
                                  return e.id === i;
                                })) && void 0 !== n
                          ? n
                          : null == t
                          ? void 0
                          : t.find(function (e) {
                              return e.id === i;
                            });
                    if (null == a) return { v: void 0 };
                    r.push(a);
                  })();
                  if ("object" === (0, a._)(m)) return m.v;
                }
              } catch (e) {
                (o = !0), (l = e);
              } finally {
                try {
                  s || null == g.return || g.return();
                } finally {
                  if (o) throw l;
                }
              }
              return r;
            },
          })).data) && void 0 !== t
          ? t
          : [];
      }
    },
    84844: function (e, t, n) {
      n.d(t, {
        LW: function () {
          return r;
        },
        eR: function () {
          return a;
        },
      });
      var i = n(10064);
      function a(e, t) {
        var n = !0,
          a = !1,
          r = void 0;
        try {
          for (
            var s, o = Object.entries(t)[Symbol.iterator]();
            !(n = (s = o.next()).done);
            n = !0
          ) {
            var l = (0, i._)(s.value, 2),
              c = l[0],
              d = l[1];
            e.addEventListener(c, d);
          }
        } catch (e) {
          (a = !0), (r = e);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (a) throw r;
          }
        }
        return function () {
          var n = !0,
            a = !1,
            r = void 0;
          try {
            for (
              var s, o = Object.entries(t)[Symbol.iterator]();
              !(n = (s = o.next()).done);
              n = !0
            ) {
              var l = (0, i._)(s.value, 2),
                c = l[0],
                d = l[1];
              e.removeEventListener(c, d);
            }
          } catch (e) {
            (a = !0), (r = e);
          } finally {
            try {
              n || null == o.return || o.return();
            } finally {
              if (a) throw r;
            }
          }
        };
      }
      function r(e, t) {
        var n = !0,
          a = !1,
          r = void 0;
        try {
          for (
            var s, o = Object.entries(t)[Symbol.iterator]();
            !(n = (s = o.next()).done);
            n = !0
          ) {
            var l = (0, i._)(s.value, 2),
              c = l[0],
              d = l[1];
            e.on(c, d);
          }
        } catch (e) {
          (a = !0), (r = e);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (a) throw r;
          }
        }
        return function () {
          var n = !0,
            a = !1,
            r = void 0;
          try {
            for (
              var s, o = Object.entries(t)[Symbol.iterator]();
              !(n = (s = o.next()).done);
              n = !0
            ) {
              var l = (0, i._)(s.value, 2),
                c = l[0],
                d = l[1];
              e.off(c, d);
            }
          } catch (e) {
            (a = !0), (r = e);
          } finally {
            try {
              n || null == o.return || o.return();
            } finally {
              if (a) throw r;
            }
          }
        };
      }
    },
    4263: function (e, t, n) {
      n.d(t, {
        V: function () {
          return s;
        },
      });
      var i = n(51217),
        a = n(36560),
        r = n.n(a),
        s = (function () {
          function e() {
            (0, i._)(this, e),
              (this.emitter = new (r())()),
              this.emitter.setMaxListeners(1e3);
          }
          var t = e.prototype;
          return (
            (t.on = function (e, t) {
              this.emitter.on(e, t);
            }),
            (t.off = function (e, t) {
              this.emitter.off(e, t);
            }),
            (t.publish = function (e) {
              this.emitter.emit(e.kind, e), this.emitter.emit("anyEvent", e);
            }),
            e
          );
        })();
    },
    8679: function (e, t, n) {
      n.d(t, {
        n: function () {
          return Z;
        },
        A3: function () {
          return S;
        },
        yx: function () {
          return D;
        },
        JS: function () {
          return L;
        },
      });
      var i,
        a,
        r,
        s = n(96237),
        o = n(39324),
        l = n(64502),
        c = n(15858),
        d = n(54636),
        u = n(42780),
        f = n(38574),
        h = n(42918),
        g = n(61888),
        m = n(70079),
        x = n(94968),
        p = n(61098),
        v = n(94495),
        b = n(72290),
        j = n(62682),
        y = n(51505),
        k = n(55548),
        w = n(17944),
        C = n(4263),
        M = n(86925),
        _ = n(45248),
        A = m.useLayoutEffect,
        N = RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$", "gms");
      ((i = a || (a = {})).Core = "Core"),
        (i.Chat = "Chat"),
        (i.Settings = "Settings");
      var T = (0, o._)({ Mod: "mod", Comma: "," }, c.s),
        P =
          ((r = {}),
          (0, s._)(
            r,
            T.Mod,
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)
              ? "⌘"
              : "Ctrl"
          ),
          (0, s._)(r, T.Comma, ","),
          (0, s._)(r, T.Enter, "⏎"),
          (0, s._)(r, T.Escape, "Esc"),
          (0, s._)(r, T.ArrowUp, "↑"),
          (0, s._)(r, T.ArrowDown, "↓"),
          (0, s._)(r, T.ArrowLeft, "←"),
          (0, s._)(r, T.ArrowRight, "→"),
          (0, s._)(r, T.Backspace, "⌫"),
          (0, s._)(r, T.Delete, "⌦"),
          (0, s._)(r, T.Tab, "⇥"),
          (0, s._)(r, T.Control, "Ctrl"),
          (0, s._)(r, T.Shift, "Shift"),
          r),
        S = function (e) {
          var t;
          return e.map(function (e) {
            return null !== (t = P[e]) && void 0 !== t ? t : e;
          });
        },
        I = (0, x.vU)({
          newChat: {
            id: "keyboardActions.newChat",
            defaultMessage: "Open new chat",
            description: "Keyboard shortcut to open a new chat",
          },
          focusPromptTextarea: {
            id: "keyboardActions.focusPromptTextarea",
            defaultMessage: "Focus chat input",
            description: "Keyboard shortcut to focus the chat input",
          },
          copyLastCodeBlock: {
            id: "keyboardActions.copyLastCodeBlock",
            defaultMessage: "Copy last code block",
            description:
              "Keyboard shortcut to copy the last code block in the chat",
          },
          copyLastResponse: {
            id: "keyboardActions.copyLastResponse",
            defaultMessage: "Copy last response",
            description:
              "Keyboard shortcut to copy the last response in the chat",
          },
          toggleCustomInstructions: {
            id: "keyboardActions.toggleCustomInstructions",
            defaultMessage: "Set custom instructions",
            description: "Keyboard shortcut to toggle custom instructions",
          },
          navigationToggle: {
            id: "keyboardActions.navigationToggle",
            defaultMessage: "Toggle sidebar",
            description: "Keyboard shortcut to toggle navigation",
          },
          deleteChat: {
            id: "keyboardActions.deleteChat",
            defaultMessage: "Delete chat",
            description: "Keyboard shortcut to delete chat",
          },
          toggleKeyboardActions: {
            id: "keyboardActions.toggleKeyboardActions",
            defaultMessage: "Show shortcuts",
            description: "Keyboard shortcut to toggle keyboard actions",
          },
        }),
        Z = new C.V(),
        z = function (e) {
          var t = e.resetThreadAction,
            n = e.clientThreadId,
            i = e.features;
          return [
            {
              key: "newChat",
              action: t || g.noop,
              actionMessageDescriptor: I.newChat,
              group: a.Core,
              keyboardBinding: [T.Mod, T.Shift, "o"],
              altKeyboardBindings: [[T.Mod, "k"]],
            },
            {
              key: "focusPromptTextarea",
              action: v.go,
              actionMessageDescriptor: I.focusPromptTextarea,
              group: a.Chat,
              keyboardBinding: [T.Shift, T.Escape],
            },
            {
              key: "copyLastCodeBlock",
              action: function () {
                if (null != n)
                  for (
                    var e = y.tQ.getThreadCurrentLeafId(n),
                      t = y.tQ.getThreadConversationTurns(n, e),
                      i = t.length - 1;
                    i >= 0;
                    i--
                  ) {
                    var a = t[i].messages.reduce(function (e, t) {
                        return null == t.err &&
                          t.message.author.role === p.uU.Assistant &&
                          "all" === t.message.recipient
                          ? e + (e ? "\n\n" : "") + (0, M.RR)(t.message)
                          : e;
                      }, ""),
                      r = (0, l._)(a.matchAll(N)),
                      s = r.length ? r[r.length - 1][1] : null;
                    if (null != s) {
                      (0, f.S)(s).then(function () {
                        b.m.success("Copied code block to clipboard");
                      });
                      break;
                    }
                  }
              },
              actionMessageDescriptor: I.copyLastCodeBlock,
              group: a.Chat,
              keyboardBinding: [T.Mod, T.Shift, ";"],
              altKeyboardBindings: [[T.Mod, T.Shift, ":"]],
            },
            {
              key: "copyLastResponse",
              action: function () {
                null != n &&
                  y.tQ
                    .copyLastMessageToClipboard(n, "keyboard")
                    .then(function () {
                      b.m.success("Last response copied to clipboard");
                    });
              },
              actionMessageDescriptor: I.copyLastResponse,
              group: a.Chat,
              keyboardBinding: [T.Mod, T.Shift, "c"],
            },
            {
              key: "toggleCustomInstructions",
              action: function () {
                return k.vm.toggleModal(k.B.UserContext);
              },
              actionMessageDescriptor: I.toggleCustomInstructions,
              group: a.Settings,
              keyboardBinding: [T.Mod, T.Shift, "i"],
              enabled: i.has(j.Rw) || i.has(j.uo),
            },
            {
              key: "navigationToggle",
              action: function () {
                return k.vm.toggleDesktopNavCollapsed();
              },
              actionMessageDescriptor: I.navigationToggle,
              group: a.Core,
              keyboardBinding: [T.Mod, T.Shift, "s"],
            },
            {
              key: "deleteChat",
              action: function () {
                Z.publish({ kind: "deleteChat" });
              },
              actionMessageDescriptor: I.deleteChat,
              group: a.Chat,
              keyboardBinding: [T.Mod, T.Shift, T.Backspace],
              altKeyboardBindings: [[T.Mod, T.Shift, T.Delete]],
            },
            {
              key: "toggleKeyboardActions",
              action: function () {
                return k.vm.toggleModal(k.B.KeyboardActions);
              },
              actionMessageDescriptor: I.toggleKeyboardActions,
              group: a.Settings,
              keyboardBinding: [T.Mod, "/"],
            },
          ];
        },
        B = function (e) {
          var t,
            n,
            i,
            a = (0, w.hz)().has(j.rk);
          return (
            (t = function (e) {
              d.A.logEvent(u.M.keyboardShortcut, { keyboardActionKey: e.key }),
                h.U.addAction("chatgpt_keyboard_shortcut", {
                  keyboardActionKey: e.key,
                });
            }),
            (n = { enabled: a }),
            (i = e.map(function (e) {
              var t = e.keyboardBinding.join("+");
              if (e.altKeyboardBindings) {
                t = [t];
                var n = e.altKeyboardBindings.map(function (e) {
                  return e.join("+");
                });
                t = t.concat(n);
              }
              return (0, _.ZP)(t, { byKey: !0 });
            })),
            void A(
              function () {
                if ((null == n ? void 0 : n.enabled) !== !1) {
                  var a = function (n) {
                      if (!n.repeat)
                        for (var a = 0; a < i.length; a++)
                          i[a](n) &&
                            (void 0 === e[a].enabled || e[a].enabled) &&
                            (n.preventDefault(), t(e[a]), e[a].action());
                    },
                    r = function (e) {
                      void 0 !== e.key && a(e);
                    },
                    s = document;
                  return (
                    s.addEventListener("keydown", r),
                    function () {
                      s.removeEventListener("keydown", r);
                    }
                  );
                }
              },
              [e, n]
            )
          );
        },
        L = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.resetThreadAction,
            n = e.clientThreadId,
            i = (0, w.hz)();
          return (0, m.useMemo)(
            function () {
              return z({
                features: i,
                resetThreadAction: t,
                clientThreadId: n,
              }).filter(function (e) {
                var t = e.enabled;
                return void 0 === t || t;
              });
            },
            [n, i, t]
          );
        },
        D = function (e) {
          B(
            L({
              resetThreadAction: e.resetThreadAction,
              clientThreadId: e.clientThreadId,
            })
          );
        };
    },
  },
]);
