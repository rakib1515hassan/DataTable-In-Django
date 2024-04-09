(function () {
  "use strict";
  var a = {
      9049: function (a, s, e) {
        var t = e(821);
        const i = { class: "row" },
          l = { class: "col-md-12" },
          n = { class: "card" },
          o = { class: "card-header d-flex" },
          r = { class: "card-title" },
          c = (0, t._)("i", { class: "fas fa-table me-2" }, null, -1),
          d = { key: 0, class: "card-options ms-auto" },
          _ = ["href"],
          f = (0, t._)("span", { class: "fas fa-plus me-2" }, null, -1),
          m = { class: "card-body bg-light" },
          h = { key: 0, class: "row justify-content-end g-0" },
          p = { class: "col-auto col-sm-3 mb-3" },
          g = { class: "input-group" },
          b = (0, t._)(
            "div",
            { class: "input-group-text bg-transparent" },
            [(0, t._)("span", { class: "fa fa-search fs--1 text-600" })],
            -1
          ),
          u = { class: "table-responsive scrollbar" },
          v = { class: "table table-bordered table-striped fs--1 mb-0" },
          y = { class: "bg-200 text-900" },
          w = ["width", "onClick"],
          k = { key: 0, class: "fa fa-sort float-end align-center" },
          x = { class: "list" },
          D = ["href"],
          U = { key: 1 },
          C = ["src", "alt"],
          S = { key: 0, class: "fas fa-check" },
          P = { key: 1, class: "fas fa-times" },
          j = { key: 3 },
          A = ["onClick"],
          T = { key: 0, class: "fas fa-eye" },
          L = { key: 1, class: "fas fa-edit" },
          H = { key: 2, class: "fas fa-trash" },
          R = { key: 0 },
          E = ["colspan"],
          O = (0, t._)(
            "div",
            { class: "d-flex justify-content-center" },
            [
              (0, t._)("div", { class: "spinner-border", role: "status" }, [
                (0, t._)("span", { class: "visually-hidden" }, "Loading..."),
              ]),
            ],
            -1
          ),
          M = [O],
          N = { key: 1 },
          q = ["colspan"],
          B = (0, t._)(
            "div",
            { class: "d-flex justify-content-center" },
            [
              (0, t._)("div", { class: "text-center" }, [
                (0, t._)("span", { class: "fas fa-exclamation-circle fs-1" }),
                (0, t._)("p", { class: "fs-1" }, "No data found!"),
              ]),
            ],
            -1
          ),
          G = [B],
          K = { class: "card-footer d-flex" },
          J = { class: "d-flex" },
          F = (0, t._)(
            "label",
            { class: "me-2 align-self-center" },
            "Showing",
            -1
          ),
          I = (0, t._)("option", { value: "10" }, "10", -1),
          Y = (0, t._)("option", { value: "25" }, "25", -1),
          z = (0, t._)("option", { value: "50" }, "50", -1),
          V = [I, Y, z],
          W = { class: "ms-auto d-flex" },
          Q = ["disabled"],
          X = (0, t._)("span", { class: "fas fa-chevron-left" }, null, -1),
          Z = [X],
          $ = { class: "pagination pagination-sm mb-0" },
          aa = ["onClick", "disabled"],
          sa = ["disabled"],
          ea = (0, t._)("span", { class: "fas fa-chevron-right" }, null, -1),
          ta = [ea];
        function ia(a, s, e, O, B, I) {
          return (
            (0, t.wg)(),
            (0, t.iD)("div", i, [
              (0, t._)("div", l, [
                (0, t._)("div", n, [
                  (0, t._)("div", o, [
                    (0, t._)("div", r, [
                      c,
                      (0, t.Uk)(" " + (0, t.zw)(B.config?.title), 1),
                    ]),
                    B.config?.control?.add_button
                      ? ((0, t.wg)(),
                        (0, t.iD)("div", d, [
                          (0, t._)(
                            "a",
                            {
                              class: "btn btn-sm btn-primary",
                              href: B.config?.control?.add_button_url,
                            },
                            [f, (0, t.Uk)(" Add ")],
                            8,
                            _
                          ),
                        ]))
                      : (0, t.kq)("", !0),
                  ]),
                  (0, t._)("div", m, [
                    B.config?.control?.search
                      ? ((0, t.wg)(),
                        (0, t.iD)("div", h, [
                          (0, t._)("div", p, [
                            (0, t._)("div", g, [
                              (0, t._)(
                                "input",
                                {
                                  class: "form-control shadow-none search",
                                  type: "search",
                                  onKeyup:
                                    s[0] ||
                                    (s[0] = (a) =>
                                      I.makeSearch(a.target.value)),
                                  placeholder: "Search...",
                                  "aria-label": "search",
                                },
                                null,
                                32
                              ),
                              b,
                            ]),
                          ]),
                        ]))
                      : (0, t.kq)("", !0),
                    (0, t._)("div", u, [
                      (0, t._)("table", v, [
                        (0, t._)("thead", y, [
                          (0, t._)("tr", null, [
                            ((0, t.wg)(!0),
                            (0, t.iD)(
                              t.HY,
                              null,
                              (0, t.Ko)(
                                B.config?.columns,
                                (a) => (
                                  (0, t.wg)(),
                                  (0, t.iD)(
                                    "th",
                                    {
                                      key: a?.name,
                                      width: a?.width,
                                      onClick: (s) =>
                                        I.makeSort(
                                          a?.sortable ? a?.source : null
                                        ),
                                    },
                                    [
                                      (0, t.Uk)((0, t.zw)(a?.title) + " ", 1),
                                      a.sortable
                                        ? ((0, t.wg)(), (0, t.iD)("span", k))
                                        : (0, t.kq)("", !0),
                                    ],
                                    8,
                                    w
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ]),
                        (0, t._)("tbody", x, [
                          ((0, t.wg)(!0),
                          (0, t.iD)(
                            t.HY,
                            null,
                            (0, t.Ko)(
                              B.data,
                              (a) => (
                                (0, t.wg)(),
                                (0, t.iD)("tr", { key: a.id }, [
                                  ((0, t.wg)(!0),
                                  (0, t.iD)(
                                    t.HY,
                                    null,
                                    (0, t.Ko)(
                                      B.config?.columns,
                                      (s) => (
                                        (0, t.wg)(),
                                        (0, t.iD)("td", { key: s?.name }, [
                                          "link" === s?.type
                                            ? ((0, t.wg)(),
                                              (0, t.iD)(
                                                "a",
                                                { key: 0, href: a[s?.source] },
                                                (0, t.zw)(a[s?.source]),
                                                9,
                                                D
                                              ))
                                            : "image" === s?.type &&
                                              a[s?.source]
                                            ? ((0, t.wg)(),
                                              (0, t.iD)("div", U, [
                                                (0, t._)(
                                                  "img",
                                                  {
                                                    src: a[s?.source],
                                                    alt: a[s?.source],
                                                    style: { height: "3rem" },
                                                    class:
                                                      "img-thumbnail img-previewable",
                                                  },
                                                  null,
                                                  8,
                                                  C
                                                ),
                                              ]))
                                            : "boolean" === s?.type
                                            ? ((0, t.wg)(),
                                              (0, t.iD)(
                                                t.HY,
                                                { key: 2 },
                                                [
                                                  !0 === a[s?.source]
                                                    ? ((0, t.wg)(),
                                                      (0, t.iD)("span", S))
                                                    : ((0, t.wg)(),
                                                      (0, t.iD)("span", P)),
                                                ],
                                                64
                                              ))
                                            : "action" === s?.type
                                            ? ((0, t.wg)(),
                                              (0, t.iD)("div", j, [
                                                ((0, t.wg)(!0),
                                                (0, t.iD)(
                                                  t.HY,
                                                  null,
                                                  (0, t.Ko)(
                                                    B.actionsItems,
                                                    (s) => (
                                                      (0, t.wg)(),
                                                      (0, t.iD)(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          "data-bs-toggle":
                                                            "tooltip",
                                                          "data-bs-placement":
                                                            "top",
                                                          "aria-label": "Edit",
                                                          "data-bs-original-title":
                                                            "Edit",
                                                          class: (0, t.C_)({
                                                            "btn btn-link p-0 mx-1":
                                                              !0,
                                                            "text-primary":
                                                              "edit" === s.type,
                                                            "text-danger":
                                                              "delete" ===
                                                              s.type,
                                                          }),
                                                          onClick: (e) =>
                                                            I.makeAction(
                                                              s.type,
                                                              s.route,
                                                              a.id
                                                            ),
                                                          key: s.type,
                                                        },
                                                        [
                                                          "view" === s.type
                                                            ? ((0, t.wg)(),
                                                              (0, t.iD)(
                                                                "span",
                                                                T
                                                              ))
                                                            : (0, t.kq)("", !0),
                                                          "edit" === s.type
                                                            ? ((0, t.wg)(),
                                                              (0, t.iD)(
                                                                "span",
                                                                L
                                                              ))
                                                            : (0, t.kq)("", !0),
                                                          "delete" === s.type
                                                            ? ((0, t.wg)(),
                                                              (0, t.iD)(
                                                                "span",
                                                                H
                                                              ))
                                                            : (0, t.kq)("", !0),
                                                        ],
                                                        10,
                                                        A
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]))
                                            : ((0, t.wg)(),
                                              (0, t.iD)(
                                                t.HY,
                                                { key: 4 },
                                                [
                                                  (0, t.Uk)(
                                                    (0, t.zw)(
                                                      I.str_limit(
                                                        a[s?.source],
                                                        65
                                                      )
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                64
                                              )),
                                        ])
                                      )
                                    ),
                                    128
                                  )),
                                ])
                              )
                            ),
                            128
                          )),
                          B.loading
                            ? ((0, t.wg)(),
                              (0, t.iD)("tr", R, [
                                (0, t._)(
                                  "td",
                                  { colspan: B.config?.columns?.length },
                                  M,
                                  8,
                                  E
                                ),
                              ]))
                            : (0, t.kq)("", !0),
                          0 !== B.data.length || B.loading
                            ? (0, t.kq)("", !0)
                            : ((0, t.wg)(),
                              (0, t.iD)("tr", N, [
                                (0, t._)(
                                  "td",
                                  { colspan: B.config?.columns?.length },
                                  G,
                                  8,
                                  q
                                ),
                              ])),
                        ]),
                      ]),
                    ]),
                  ]),
                  (0, t._)("div", K, [
                    (0, t._)("div", J, [
                      F,
                      (0, t._)(
                        "select",
                        {
                          class: "form-control form-control-sm",
                          onChange:
                            s[1] || (s[1] = (a) => I.makeLimit(a.target.value)),
                        },
                        V,
                        32
                      ),
                    ]),
                    (0, t._)("nav", W, [
                      (0, t._)(
                        "button",
                        {
                          class: (0, t.C_)({
                            "btn btn-sm btn-falcon-default me-1 ": !0,
                            disabled: !1 === B.pagination.has_prev,
                          }),
                          type: "button",
                          title: "Previous",
                          disabled: !1 === B.pagination.has_prev,
                          onClick:
                            s[2] ||
                            (s[2] = (a) =>
                              I.makePage(B.pagination?.current_page - 1)),
                        },
                        Z,
                        10,
                        Q
                      ),
                      (0, t._)("ul", $, [
                        ((0, t.wg)(!0),
                        (0, t.iD)(
                          t.HY,
                          null,
                          (0, t.Ko)(
                            B.pagination?.pages,
                            (a) => (
                              (0, t.wg)(),
                              (0, t.iD)(
                                "li",
                                {
                                  key: a,
                                  class: (0, t.C_)({
                                    "page-item": !0,
                                    active: a === B.pagination?.current_page,
                                  }),
                                },
                                [
                                  (0, t._)(
                                    "button",
                                    {
                                      class: "page-link",
                                      type: "button",
                                      onClick: (s) => I.makePage(a),
                                      disabled:
                                        B.pagination?.current_page === a ||
                                        "..." === a,
                                    },
                                    (0, t.zw)(a),
                                    9,
                                    aa
                                  ),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      (0, t._)(
                        "button",
                        {
                          class: (0, t.C_)({
                            "btn btn-sm btn-falcon-default ms-1": !0,
                            disabled: !1 === B.pagination.has_next,
                          }),
                          type: "button",
                          title: "Next",
                          disabled: !1 === B.pagination.has_next,
                          onClick:
                            s[3] ||
                            (s[3] = (a) =>
                              I.makePage(B.pagination?.current_page + 1)),
                        },
                        ta,
                        10,
                        sa
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          );
        }
        e(2062), e(7658);
        const la = () =>
          document
            .getElementsByTagName("meta")
            ["csrf-token"].getAttribute("content");
        var na = la;
        const oa = (a, s = 30) =>
          null == a ? "" : a.length > s ? a.substring(0, s) + "..." : a;
        var ra = oa,
          ca = {
            props: { url: String },
            data() {
              return {
                data: [],
                loading: !0,
                error: null,
                configLoading: !0,
                config: {},
                filters: {
                  search: "",
                  sort_by: "",
                  order_by: "asc",
                  page: 1,
                  limit: 10,
                },
                pagination: {
                  current_page: 1,
                  pages: [],
                  has_next: !1,
                  has_prev: !1,
                  total: 0,
                },
                actionsItems: [],
              };
            },
            mounted() {
              this.getConfig();
            },
            methods: {
              str_limit: ra,
              getConfig() {
                fetch(this.url + "config/")
                  .then((a) => a.json())
                  .then((a) => {
                    this.config = a;
                    const s = a.columns.find((a) => "action" === a.type);
                    "undefined" !== typeof s && (this.actionsItems = s.actions),
                      (this.configLoading = !1),
                      this.getData();
                  })
                  .catch((a) => {
                    (this.error = a), (this.configLoading = !1);
                  });
              },
              getData() {
                const a = new URL(window.location.origin + this.url + "data/");
                a.searchParams.append("search", this.filters?.search),
                  a.searchParams.append("sort_by", this.filters?.sort_by),
                  a.searchParams.append("order_by", this.filters?.order_by),
                  a.searchParams.append("page", this.filters?.page),
                  a.searchParams.append("limit", this.filters?.limit),
                  fetch(a)
                    .then((a) => a.json())
                    .then((a) => {
                      (this.data = a.data),
                        this.setPagination(a.total),
                        (this.loading = !1);
                    })
                    .catch((a) => {
                      (this.error = a), (this.loading = !1);
                    });
              },
              makeSort(a) {
                null !== a &&
                  (this.filters.sort_by === a
                    ? (this.filters.order_by =
                        "asc" === this.filters.order_by ? "desc" : "asc")
                    : ((this.filters.sort_by = a),
                      (this.filters.order_by = "asc")));
              },
              makePage(a) {
                this.filters.page = a;
              },
              makeLimit(a) {
                (this.filters.limit = a), (this.filters.page = 1);
              },
              makeSearch(a) {
                (this.filters.search = a), (this.filters.page = 1);
              },
              makeAction(a, s, e) {
                if ("delete" == a && !confirm("Are you sure?")) return;
                const t = new URL(
                    window.location.origin + this.url + "action/"
                  ),
                  i = new FormData();
                i.append("id", e),
                  i.append("route", s),
                  i.append("type", a),
                  fetch(t, {
                    method: "POST",
                    body: i,
                    headers: { "X-CSRFToken": na() },
                  })
                    .then((a) => a.json())
                    .then((a) => {
                      "redirect" == a.type
                        ? (window.location.href = a.url)
                        : this.getData();
                    })
                    .catch((a) => {
                      this.error = a;
                    });
              },
              setPagination(a) {
                const s = this.filters.limit,
                  e = this.filters.page,
                  t = Math.ceil(a / s || 1);
                let i = !1,
                  l = !1;
                const n = [];
                for (let o = 1; o <= t; o++)
                  (o <= 2 || o >= t - 1 || (o >= e - 2 && o <= e + 2)) &&
                    n.push(o),
                    3 === o && e - 4 > 2 && n.push("..."),
                    o === t - 2 && e + 4 < t - 1 && n.push("..."),
                    1 === o && 1 !== e && (l = !0),
                    o === t && e !== t && (i = !0);
                this.pagination = {
                  current_page: e,
                  pages: n,
                  has_next: i,
                  has_prev: l,
                  total: a,
                };
              },
            },
            watch: {
              filters: {
                handler() {
                  this.getData();
                },
                deep: !0,
              },
            },
          },
          da = e(3744);
        const _a = (0, da.Z)(ca, [["render", ia]]);
        var fa = _a;
        const ma = { class: "row" },
          ha = (0, t._)(
            "div",
            { class: "col-md-8" },
            [
              (0, t._)("div", { class: "card mb-3" }, [
                (0, t._)("div", { class: "card-header" }, [
                  (0, t._)("div", { class: "row align-items-center" }, [
                    (0, t._)("div", { class: "col" }, [
                      (0, t._)("h5", { class: "mb-0" }, [
                        (0, t._)("i", { class: "fas fa-users me-1" }),
                        (0, t.Uk)(" Group Details "),
                      ]),
                    ]),
                    (0, t._)("div", { class: "col-auto" }, [
                      (0, t._)(
                        "a",
                        { class: "btn btn-konnect-default btn-sm", href: "#" },
                        [
                          (0, t._)("span", {
                            class: "fas fa-pencil-alt fs--2 me-1",
                          }),
                          (0, t.Uk)("Update details "),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                (0, t._)("div", { class: "card-body bg-light border-top" }, [
                  (0, t._)("table", { class: "table" }, [
                    (0, t._)("tr", null, [
                      (0, t._)("th", { width: "15%" }, " Name"),
                      (0, t._)("td", { width: "2%" }, ":"),
                      (0, t._)("td"),
                    ]),
                    (0, t._)("tr", null, [
                      (0, t._)("th", null, "Description"),
                      (0, t._)("td", null, ":"),
                      (0, t._)("td"),
                    ]),
                    (0, t._)("tr", null, [
                      (0, t._)("th", null, "Created At"),
                      (0, t._)("td", null, ":"),
                      (0, t._)("td"),
                    ]),
                    (0, t._)("tr", null, [
                      (0, t._)("th", null, "Updated At"),
                      (0, t._)("td", null, ":"),
                      (0, t._)("td"),
                    ]),
                    (0, t._)("tr", null, [
                      (0, t._)("th", null, "Avatar"),
                      (0, t._)("td", null, ":"),
                      (0, t._)("td", null, [
                        (0, t._)("img", {
                          class:
                            "img-fluid fit-cover w-sm-100 h-sm-100 w-lg-25 h-lg-25 rounded-1 absolute-sm-centered",
                          src: "#",
                          alt: "No image",
                        }),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              (0, t._)("div", { class: "card mb-3" }, [
                (0, t._)("div", { class: "card-body bg-light" }, [
                  (0, t._)("div", { class: "tab-content" }, [
                    (0, t._)(
                      "div",
                      {
                        class: "tab-pane preview-tab-pane active",
                        role: "tabpanel",
                        "aria-labelledby":
                          "tab-dom-ec00c46d-1f00-42e2-a104-6818b30a27af",
                        id: "dom-ec00c46d-1f00-42e2-a104-6818b30a27af",
                      },
                      [
                        (0, t._)(
                          "ul",
                          {
                            class: "nav nav-tabs",
                            id: "myTab",
                            role: "tablist",
                          },
                          [
                            (0, t._)("li", { class: "nav-item" }, [
                              (0, t._)(
                                "a",
                                {
                                  class: "nav-link active",
                                  id: "about-tab",
                                  "data-bs-toggle": "tab",
                                  href: "#tab-about",
                                  role: "tab",
                                  "aria-controls": "tab-about",
                                  "aria-selected": "true",
                                },
                                "About"
                              ),
                            ]),
                            (0, t._)("li", { class: "nav-item" }, [
                              (0, t._)(
                                "a",
                                {
                                  class: "nav-link",
                                  id: "post-tab",
                                  "data-bs-toggle": "tab",
                                  href: "#tab-post",
                                  role: "tab",
                                  "aria-controls": "tab-post",
                                  "aria-selected": "false",
                                },
                                "Posts"
                              ),
                            ]),
                            (0, t._)("li", { class: "nav-item" }, [
                              (0, t._)(
                                "a",
                                {
                                  class: "nav-link",
                                  id: "member-tab",
                                  "data-bs-toggle": "tab",
                                  href: "#tab-member",
                                  role: "tab",
                                  "aria-controls": "tab-member",
                                  "aria-selected": "false",
                                },
                                "Members"
                              ),
                            ]),
                          ]
                        ),
                        (0, t._)(
                          "div",
                          {
                            class: "tab-content border-x border-bottom p-3",
                            id: "myTabContent",
                          },
                          [
                            (0, t._)(
                              "div",
                              {
                                class: "tab-pane fade show active",
                                id: "tab-about",
                                role: "tabpanel",
                                "aria-labelledby": "about-tab",
                              },
                              [
                                (0, t._)("div", { class: "card" }, [
                                  (0, t._)(
                                    "div",
                                    { class: "card-body fs--1 p-0" },
                                    [
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "🔍"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" Followed "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Massachusetts Institute of Technology"
                                                ),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "Just Now"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "📌"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" Save a "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Life Event"
                                                ),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "Yesterday"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "🏷️"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Rowan Atkinson"
                                                ),
                                                (0, t.Uk)(" Tagged "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" in a live video"),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "December 1, 8:00 PM"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "💬"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Robert Downey"
                                                ),
                                                (0, t.Uk)(" mention "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" in a comment"),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "November 27, 12:00 AM"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "😂"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(
                                                  " reacted to a comment of "
                                                ),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anna Karinina"
                                                ),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "November 20, 8:00 Am"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "🎁"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Jennifer Kent"
                                                ),
                                                (0, t.Uk)(" Congratulated "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "November 13, 5:00 Am"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "🏷️"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "California Institute of Technology"
                                                ),
                                                (0, t.Uk)(" tagged "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" in a post."),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "November 8, 5:00 PM"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "border-bottom-0 notification rounded-0 border-x-0 border border-300",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "📋️"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkins"
                                                ),
                                                (0, t.Uk)(" joined "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Victory day cultural Program"
                                                ),
                                                (0, t.Uk)(" with "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Tony Stark"
                                                ),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "November 01, 11:30 AM"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "notification border-x-0 border-bottom-0 border-300 rounded-top-0",
                                          href: "#!",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "notification-avatar" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "avatar avatar-xl me-3",
                                                },
                                                [
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "avatar-emoji rounded-circle",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "span",
                                                        {
                                                          role: "img",
                                                          "aria-label": "Emoji",
                                                        },
                                                        "📅️"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "notification-body" },
                                            [
                                              (0, t._)("p", { class: "mb-1" }, [
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Massachusetts Institute of Technology"
                                                ),
                                                (0, t.Uk)(" invited "),
                                                (0, t._)(
                                                  "strong",
                                                  null,
                                                  "Anthony Hopkin"
                                                ),
                                                (0, t.Uk)(" to an event"),
                                              ]),
                                              (0, t._)(
                                                "span",
                                                { class: "notification-time" },
                                                "October 28, 12:00 PM"
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                            (0, t._)(
                              "div",
                              {
                                class: "tab-pane fade",
                                id: "tab-post",
                                role: "tabpanel",
                                "aria-labelledby": "post-tab",
                              },
                              [
                                (0, t._)("div", { class: "card mb-3" }, [
                                  (0, t._)(
                                    "div",
                                    { class: "card-header bg-light" },
                                    [
                                      (0, t._)(
                                        "div",
                                        {
                                          class: "row justify-content-between",
                                        },
                                        [
                                          (0, t._)("div", { class: "col" }, [
                                            (0, t._)(
                                              "div",
                                              { class: "d-flex" },
                                              [
                                                (0, t._)(
                                                  "div",
                                                  {
                                                    class:
                                                      "avatar avatar-2xl status-online",
                                                  },
                                                  [
                                                    (0, t._)("img", {
                                                      class: "rounded-circle",
                                                      src: "#",
                                                      alt: "",
                                                    }),
                                                  ]
                                                ),
                                                (0, t._)(
                                                  "div",
                                                  {
                                                    class:
                                                      "flex-1 align-self-center ms-2",
                                                  },
                                                  [
                                                    (0, t._)(
                                                      "p",
                                                      { class: "mb-1 lh-1" },
                                                      [
                                                        (0, t._)(
                                                          "a",
                                                          {
                                                            class:
                                                              "fw-semi-bold",
                                                            href: "",
                                                          },
                                                          "Rowan Atkinson"
                                                        ),
                                                        (0, t.Uk)(
                                                          " shared an "
                                                        ),
                                                        (0, t._)(
                                                          "a",
                                                          { href: "#!" },
                                                          "album"
                                                        ),
                                                      ]
                                                    ),
                                                    (0, t._)(
                                                      "p",
                                                      { class: "mb-0 fs--1" },
                                                      [
                                                        (0, t.Uk)(
                                                          "11 hrs • Consett, UK • "
                                                        ),
                                                        (0, t._)("span", {
                                                          class:
                                                            "fas fa-globe-americas",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "dropdown font-sans-serif",
                                                },
                                                [
                                                  (0, t._)(
                                                    "button",
                                                    {
                                                      class:
                                                        "btn btn-sm dropdown-toggle p-1 dropdown-caret-none",
                                                      type: "button",
                                                      id: "post-album-action",
                                                      "data-bs-toggle":
                                                        "dropdown",
                                                      "aria-haspopup": "true",
                                                      "aria-expanded": "false",
                                                    },
                                                    [
                                                      (0, t._)("span", {
                                                        class:
                                                          "fas fa-ellipsis-h fs--1",
                                                      }),
                                                    ]
                                                  ),
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "dropdown-menu dropdown-menu-end py-3",
                                                      "aria-labelledby":
                                                        "post-album-action",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "View"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "Edit"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "Report"
                                                      ),
                                                      (0, t._)("div", {
                                                        class:
                                                          "dropdown-divider",
                                                      }),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item text-warning",
                                                          href: "#!",
                                                        },
                                                        "Archive"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item text-danger",
                                                          href: "#!",
                                                        },
                                                        "Delete "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  (0, t._)(
                                    "div",
                                    { class: "card-body overflow-hidden" },
                                    [
                                      (0, t._)(
                                        "p",
                                        null,
                                        "Rowan Sebastian Atkinson CBE is an English actor, comedian and screenwriter best known for his work on the sitcoms Blackadder and Mr. Bean."
                                      ),
                                      (0, t._)("div", { class: "row mx-n1" }, [
                                        (0, t._)(
                                          "div",
                                          { class: "col-6 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-6 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  (0, t._)(
                                    "div",
                                    { class: "card-footer bg-light pt-0" },
                                    [
                                      (0, t._)(
                                        "div",
                                        {
                                          class:
                                            "border-bottom border-200 fs--1 py-3",
                                        },
                                        [
                                          (0, t._)(
                                            "a",
                                            { class: "text-700", href: "#!" },
                                            "345 Likes"
                                          ),
                                          (0, t.Uk)(" • "),
                                          (0, t._)(
                                            "a",
                                            { class: "text-700", href: "#!" },
                                            "34 Comments"
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        {
                                          class:
                                            "row g-0 fw-semi-bold text-center py-2 fs--1",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 d-flex align-items-center me-3",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Like"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 d-flex align-items-center me-3",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Comment"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            {
                                              class:
                                                "col-auto d-flex align-items-center",
                                            },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 text-700 d-flex align-items-center",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Share"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "form",
                                        {
                                          class:
                                            "d-flex align-items-center border-top border-200 pt-3",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)("input", {
                                            class:
                                              "form-control rounded-pill ms-2 fs--1",
                                            type: "text",
                                            placeholder: "Write a comment...",
                                          }),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        { class: "d-flex mt-3" },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "flex-1 ms-2 fs--1" },
                                            [
                                              (0, t._)(
                                                "p",
                                                {
                                                  class:
                                                    "mb-1 bg-200 rounded-3 p-2",
                                                },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    {
                                                      class: "fw-semi-bold",
                                                      href: "#",
                                                    },
                                                    "Rowan Atkinson"
                                                  ),
                                                  (0, t.Uk)(
                                                    " She starred as Jane Porter in The "
                                                  ),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "@Legend of Tarzan (2016)"
                                                  ),
                                                  (0, t.Uk)(
                                                    ", Tanya Vanderpoel in Whiskey Tango Foxtrot (2016) and as DC comics villain Harley Quinn in Suicide Squad (2016), for which she was nominated for a Teen Choice Award, and many other awards."
                                                  ),
                                                ]
                                              ),
                                              (0, t._)(
                                                "div",
                                                { class: "px-2" },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Like"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Reply"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Delete"
                                                  ),
                                                  (0, t.Uk)(" • 23min "),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        { class: "d-flex mt-3" },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "flex-1 ms-2 fs--1" },
                                            [
                                              (0, t._)(
                                                "p",
                                                {
                                                  class:
                                                    "mb-1 bg-200 rounded-3 p-2",
                                                },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    {
                                                      class: "fw-semi-bold",
                                                      href: "#",
                                                    },
                                                    "Jessalyn Gilsig"
                                                  ),
                                                  (0, t.Uk)(
                                                    " Jessalyn Sarah Gilsig is a Canadian-American actress known for her roles in television series, e.g., as Lauren Davis in Boston Public, Gina Russo in Nip/Tuck, Terri Schuester in Glee, and as Siggy Haraldson on the History Channel series Vikings. 🏆"
                                                  ),
                                                ]
                                              ),
                                              (0, t._)(
                                                "div",
                                                { class: "px-2" },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Like"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Reply"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Delete"
                                                  ),
                                                  (0, t.Uk)(" • 3hrs "),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "fs--1 text-700 d-inline-block mt-2",
                                          href: "#!",
                                        },
                                        "Load more comments (2 of 34)"
                                      ),
                                    ]
                                  ),
                                ]),
                                (0, t._)("div", { class: "card mb-3" }, [
                                  (0, t._)(
                                    "div",
                                    { class: "card-header bg-light" },
                                    [
                                      (0, t._)(
                                        "div",
                                        {
                                          class: "row justify-content-between",
                                        },
                                        [
                                          (0, t._)("div", { class: "col" }, [
                                            (0, t._)(
                                              "div",
                                              { class: "d-flex" },
                                              [
                                                (0, t._)(
                                                  "div",
                                                  {
                                                    class:
                                                      "avatar avatar-2xl status-online",
                                                  },
                                                  [
                                                    (0, t._)("img", {
                                                      class: "rounded-circle",
                                                      src: "#",
                                                      alt: "",
                                                    }),
                                                  ]
                                                ),
                                                (0, t._)(
                                                  "div",
                                                  {
                                                    class:
                                                      "flex-1 align-self-center ms-2",
                                                  },
                                                  [
                                                    (0, t._)(
                                                      "p",
                                                      { class: "mb-1 lh-1" },
                                                      [
                                                        (0, t._)(
                                                          "a",
                                                          {
                                                            class:
                                                              "fw-semi-bold",
                                                            href: "",
                                                          },
                                                          "Rowan Atkinson"
                                                        ),
                                                        (0, t.Uk)(
                                                          " shared an "
                                                        ),
                                                        (0, t._)(
                                                          "a",
                                                          { href: "#!" },
                                                          "album"
                                                        ),
                                                      ]
                                                    ),
                                                    (0, t._)(
                                                      "p",
                                                      { class: "mb-0 fs--1" },
                                                      [
                                                        (0, t.Uk)(
                                                          "11 hrs • Consett, UK • "
                                                        ),
                                                        (0, t._)("span", {
                                                          class:
                                                            "fas fa-globe-americas",
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]),
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "dropdown font-sans-serif",
                                                },
                                                [
                                                  (0, t._)(
                                                    "button",
                                                    {
                                                      class:
                                                        "btn btn-sm dropdown-toggle p-1 dropdown-caret-none",
                                                      type: "button",
                                                      id: "post-album-action",
                                                      "data-bs-toggle":
                                                        "dropdown",
                                                      "aria-haspopup": "true",
                                                      "aria-expanded": "false",
                                                    },
                                                    [
                                                      (0, t._)("span", {
                                                        class:
                                                          "fas fa-ellipsis-h fs--1",
                                                      }),
                                                    ]
                                                  ),
                                                  (0, t._)(
                                                    "div",
                                                    {
                                                      class:
                                                        "dropdown-menu dropdown-menu-end py-3",
                                                      "aria-labelledby":
                                                        "post-album-action",
                                                    },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "View"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "Edit"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item",
                                                          href: "#!",
                                                        },
                                                        "Report"
                                                      ),
                                                      (0, t._)("div", {
                                                        class:
                                                          "dropdown-divider",
                                                      }),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item text-warning",
                                                          href: "#!",
                                                        },
                                                        "Archive"
                                                      ),
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class:
                                                            "dropdown-item text-danger",
                                                          href: "#!",
                                                        },
                                                        "Delete "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  (0, t._)(
                                    "div",
                                    { class: "card-body overflow-hidden" },
                                    [
                                      (0, t._)(
                                        "p",
                                        null,
                                        "Rowan Sebastian Atkinson CBE is an English actor, comedian and screenwriter best known for his work on the sitcoms Blackadder and Mr. Bean."
                                      ),
                                      (0, t._)("div", { class: "row mx-n1" }, [
                                        (0, t._)(
                                          "div",
                                          { class: "col-6 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-6 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "div",
                                          { class: "col-4 p-1" },
                                          [
                                            (0, t._)(
                                              "a",
                                              {
                                                href: "#",
                                                "data-gallery": "gallery-1",
                                              },
                                              [
                                                (0, t._)("img", {
                                                  class: "img-fluid rounded",
                                                  src: "#",
                                                  alt: "",
                                                }),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                  (0, t._)(
                                    "div",
                                    { class: "card-footer bg-light pt-0" },
                                    [
                                      (0, t._)(
                                        "div",
                                        {
                                          class:
                                            "border-bottom border-200 fs--1 py-3",
                                        },
                                        [
                                          (0, t._)(
                                            "a",
                                            { class: "text-700", href: "#!" },
                                            "345 Likes"
                                          ),
                                          (0, t.Uk)(" • "),
                                          (0, t._)(
                                            "a",
                                            { class: "text-700", href: "#!" },
                                            "34 Comments"
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        {
                                          class:
                                            "row g-0 fw-semi-bold text-center py-2 fs--1",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 d-flex align-items-center me-3",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Like"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "col-auto" },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 d-flex align-items-center me-3",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Comment"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            {
                                              class:
                                                "col-auto d-flex align-items-center",
                                            },
                                            [
                                              (0, t._)(
                                                "a",
                                                {
                                                  class:
                                                    "rounded-2 text-700 d-flex align-items-center",
                                                  href: "#!",
                                                },
                                                [
                                                  (0, t._)("img", {
                                                    src: "#",
                                                    width: "20",
                                                    alt: "",
                                                  }),
                                                  (0, t._)(
                                                    "span",
                                                    { class: "ms-1" },
                                                    "Share"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "form",
                                        {
                                          class:
                                            "d-flex align-items-center border-top border-200 pt-3",
                                        },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)("input", {
                                            class:
                                              "form-control rounded-pill ms-2 fs--1",
                                            type: "text",
                                            placeholder: "Write a comment...",
                                          }),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        { class: "d-flex mt-3" },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "flex-1 ms-2 fs--1" },
                                            [
                                              (0, t._)(
                                                "p",
                                                {
                                                  class:
                                                    "mb-1 bg-200 rounded-3 p-2",
                                                },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    {
                                                      class: "fw-semi-bold",
                                                      href: "#",
                                                    },
                                                    "Rowan Atkinson"
                                                  ),
                                                  (0, t.Uk)(
                                                    " She starred as Jane Porter in The "
                                                  ),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "@Legend of Tarzan (2016)"
                                                  ),
                                                  (0, t.Uk)(
                                                    ", Tanya Vanderpoel in Whiskey Tango Foxtrot (2016) and as DC comics villain Harley Quinn in Suicide Squad (2016), for which she was nominated for a Teen Choice Award, and many other awards."
                                                  ),
                                                ]
                                              ),
                                              (0, t._)(
                                                "div",
                                                { class: "px-2" },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Like"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Reply"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Delete"
                                                  ),
                                                  (0, t.Uk)(" • 23min "),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "div",
                                        { class: "d-flex mt-3" },
                                        [
                                          (0, t._)(
                                            "div",
                                            { class: "avatar avatar-xl" },
                                            [
                                              (0, t._)("img", {
                                                class: "rounded-circle",
                                                src: "#",
                                                alt: "",
                                              }),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            { class: "flex-1 ms-2 fs--1" },
                                            [
                                              (0, t._)(
                                                "p",
                                                {
                                                  class:
                                                    "mb-1 bg-200 rounded-3 p-2",
                                                },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    {
                                                      class: "fw-semi-bold",
                                                      href: "#",
                                                    },
                                                    "Jessalyn Gilsig"
                                                  ),
                                                  (0, t.Uk)(
                                                    " Jessalyn Sarah Gilsig is a Canadian-American actress known for her roles in television series, e.g., as Lauren Davis in Boston Public, Gina Russo in Nip/Tuck, Terri Schuester in Glee, and as Siggy Haraldson on the History Channel series Vikings. 🏆"
                                                  ),
                                                ]
                                              ),
                                              (0, t._)(
                                                "div",
                                                { class: "px-2" },
                                                [
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Like"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Reply"
                                                  ),
                                                  (0, t.Uk)(" • "),
                                                  (0, t._)(
                                                    "a",
                                                    { href: "#!" },
                                                    "Delete"
                                                  ),
                                                  (0, t.Uk)(" • 3hrs "),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      (0, t._)(
                                        "a",
                                        {
                                          class:
                                            "fs--1 text-700 d-inline-block mt-2",
                                          href: "#!",
                                        },
                                        "Load more comments (2 of 34)"
                                      ),
                                    ]
                                  ),
                                ]),
                                (0, t._)(
                                  "div",
                                  { class: "card-footer d-flex" },
                                  [
                                    (0, t._)("div", { class: "d-flex" }, [
                                      (0, t._)(
                                        "label",
                                        { class: "me-2 align-self-center" },
                                        "Showing"
                                      ),
                                      (0, t._)(
                                        "select",
                                        {
                                          class: "form-control form-control-sm",
                                        },
                                        [
                                          (0, t._)(
                                            "option",
                                            { value: "10" },
                                            "10"
                                          ),
                                          (0, t._)(
                                            "option",
                                            { value: "25" },
                                            "25"
                                          ),
                                          (0, t._)(
                                            "option",
                                            { value: "50" },
                                            "50"
                                          ),
                                        ]
                                      ),
                                    ]),
                                    (0, t._)(
                                      "nav",
                                      { class: "ms-auto d-flex" },
                                      [
                                        (0, t._)(
                                          "button",
                                          {
                                            class:
                                              "btn btn-sm btn-falcon-default me-1",
                                            type: "button",
                                            title: "Previous",
                                          },
                                          [
                                            (0, t._)("span", {
                                              class: "fas fa-chevron-left",
                                            }),
                                          ]
                                        ),
                                        (0, t._)(
                                          "ul",
                                          {
                                            class:
                                              "pagination pagination-sm mb-0",
                                          },
                                          [
                                            (0, t._)(
                                              "li",
                                              {
                                                key: "page",
                                                class: "page-item active",
                                              },
                                              [
                                                (0, t._)(
                                                  "button",
                                                  {
                                                    class: "page-link",
                                                    type: "button",
                                                  },
                                                  " 1 "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "button",
                                          {
                                            class:
                                              "btn btn-sm btn-falcon-default ms-1",
                                            type: "button",
                                            title: "Next",
                                          },
                                          [
                                            (0, t._)("span", {
                                              class: "fas fa-chevron-right",
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            (0, t._)(
                              "div",
                              {
                                class: "tab-pane fade",
                                id: "tab-member",
                                role: "tabpanel",
                                "aria-labelledby": "member-tab",
                              },
                              [
                                (0, t._)("div", { class: "card" }, [
                                  (0, t._)(
                                    "div",
                                    { class: "card-body bg-light px-1 py-0" },
                                    [
                                      (0, t._)(
                                        "div",
                                        { class: "row g-0 text-center fs--1" },
                                        [
                                          (0, t._)(
                                            "div",
                                            {
                                              class:
                                                "col-6 col-md-4 col-lg-3 col-xxl-2 mb-1",
                                            },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "bg-white dark__bg-1100 p-3 h-100",
                                                },
                                                [
                                                  (0, t._)("a", { href: "#" }, [
                                                    (0, t._)("img", {
                                                      class:
                                                        "img-thumbnail img-fluid rounded-circle mb-3 shadow-sm",
                                                      src: "#",
                                                      alt: "",
                                                      width: "100",
                                                    }),
                                                  ]),
                                                  (0, t._)(
                                                    "h6",
                                                    { class: "mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        { href: "#" },
                                                        "Emilia Clarke"
                                                      ),
                                                    ]
                                                  ),
                                                  (0, t._)(
                                                    "p",
                                                    { class: "fs--2 mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class: "text-700",
                                                          href: "#!",
                                                        },
                                                        "Technext limited"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            {
                                              class:
                                                "col-6 col-md-4 col-lg-3 col-xxl-2 mb-1",
                                            },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "bg-white dark__bg-1100 p-3 h-100",
                                                },
                                                [
                                                  (0, t._)("a", { href: "#" }, [
                                                    (0, t._)("img", {
                                                      class:
                                                        "img-thumbnail img-fluid rounded-circle mb-3 shadow-sm",
                                                      src: "#",
                                                      alt: "",
                                                      width: "100",
                                                    }),
                                                  ]),
                                                  (0, t._)(
                                                    "h6",
                                                    { class: "mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        { href: "#" },
                                                        "John Bradley"
                                                      ),
                                                    ]
                                                  ),
                                                  (0, t._)(
                                                    "p",
                                                    { class: "fs--2 mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class: "text-700",
                                                          href: "#!",
                                                        },
                                                        "Chess Club"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          (0, t._)(
                                            "div",
                                            {
                                              class:
                                                "col-6 col-md-4 col-lg-3 col-xxl-2 mb-1",
                                            },
                                            [
                                              (0, t._)(
                                                "div",
                                                {
                                                  class:
                                                    "bg-white dark__bg-1100 p-3 h-100",
                                                },
                                                [
                                                  (0, t._)("a", { href: "#" }, [
                                                    (0, t._)("img", {
                                                      class:
                                                        "img-thumbnail img-fluid rounded-circle mb-3 shadow-sm",
                                                      src: "#",
                                                      alt: "",
                                                      width: "100",
                                                    }),
                                                  ]),
                                                  (0, t._)(
                                                    "h6",
                                                    { class: "mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        { href: "#" },
                                                        "Gemma Whelan"
                                                      ),
                                                    ]
                                                  ),
                                                  (0, t._)(
                                                    "p",
                                                    { class: "fs--2 mb-1" },
                                                    [
                                                      (0, t._)(
                                                        "a",
                                                        {
                                                          class: "text-700",
                                                          href: "#!",
                                                        },
                                                        "Chamber Music Society"
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                                (0, t._)(
                                  "div",
                                  { class: "card-footer d-flex" },
                                  [
                                    (0, t._)("div", { class: "d-flex" }, [
                                      (0, t._)(
                                        "label",
                                        { class: "me-2 align-self-center" },
                                        "Showing"
                                      ),
                                      (0, t._)(
                                        "select",
                                        {
                                          class: "form-control form-control-sm",
                                        },
                                        [
                                          (0, t._)(
                                            "option",
                                            { value: "10" },
                                            "10"
                                          ),
                                          (0, t._)(
                                            "option",
                                            { value: "25" },
                                            "25"
                                          ),
                                          (0, t._)(
                                            "option",
                                            { value: "50" },
                                            "50"
                                          ),
                                        ]
                                      ),
                                    ]),
                                    (0, t._)(
                                      "nav",
                                      { class: "ms-auto d-flex" },
                                      [
                                        (0, t._)(
                                          "button",
                                          {
                                            class:
                                              "btn btn-sm btn-falcon-default me-1",
                                            type: "button",
                                            title: "Previous",
                                          },
                                          [
                                            (0, t._)("span", {
                                              class: "fas fa-chevron-left",
                                            }),
                                          ]
                                        ),
                                        (0, t._)(
                                          "ul",
                                          {
                                            class:
                                              "pagination pagination-sm mb-0",
                                          },
                                          [
                                            (0, t._)(
                                              "li",
                                              {
                                                key: "page",
                                                class: "page-item active",
                                              },
                                              [
                                                (0, t._)(
                                                  "button",
                                                  {
                                                    class: "page-link",
                                                    type: "button",
                                                  },
                                                  " 1 "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        (0, t._)(
                                          "button",
                                          {
                                            class:
                                              "btn btn-sm btn-falcon-default ms-1",
                                            type: "button",
                                            title: "Next",
                                          },
                                          [
                                            (0, t._)("span", {
                                              class: "fas fa-chevron-right",
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ],
            -1
          ),
          pa = [ha];
        function ga(a, s, e, i, l, n) {
          return (0, t.wg)(), (0, t.iD)("div", ma, pa);
        }
        var ba = {
          props: { url: String },
          data() {
            return {
              data: [],
              loading: !0,
              error: null,
              configLoading: !0,
              config: {},
              filters: {
                search: "",
                sort_by: "",
                order_by: "asc",
                page: 1,
                limit: 10,
              },
              postPagination: {
                current_page: 1,
                pages: [],
                has_next: !1,
                has_prev: !1,
                total: 0,
              },
              memberPagination: {
                current_page: 1,
                pages: [],
                has_next: !1,
                has_prev: !1,
                total: 0,
              },
              actionsItems: [],
            };
          },
          mounted() {
            this.getData(), console.log("url: ", this.url);
          },
          methods: {
            str_limit: ra,
            getConfig() {
              this.getData(),
                fetch(this.url + "config/")
                  .then((a) => a.json())
                  .then((a) => {
                    const s = a.columns.find((a) => "action" === a.type);
                    "undefined" !== typeof s && (this.actionsItems = s.actions),
                      (this.configLoading = !1),
                      this.getData();
                  })
                  .catch((a) => {
                    (this.error = a), (this.configLoading = !1);
                  });
            },
            getData() {
              const a = new URL(window.location.origin + this.url + "data/");
              a.searchParams.append("search", this.filters?.search),
                a.searchParams.append("sort_by", this.filters?.sort_by),
                a.searchParams.append("order_by", this.filters?.order_by),
                a.searchParams.append("page", this.filters?.page),
                a.searchParams.append("limit", this.filters?.limit),
                fetch(a)
                  .then((a) => a.json())
                  .then((a) => {
                    (this.data = a.post_data),
                      this.setPagination(a.post_total),
                      console.log("data: ", a),
                      (this.loading = !1);
                  })
                  .catch((a) => {
                    (this.error = a), (this.loading = !1);
                  });
            },
            makeSort(a) {
              null !== a &&
                (this.filters.sort_by === a
                  ? (this.filters.order_by =
                      "asc" === this.filters.order_by ? "desc" : "asc")
                  : ((this.filters.sort_by = a),
                    (this.filters.order_by = "asc")));
            },
            makePage(a) {
              this.filters.page = a;
            },
            makeLimit(a) {
              (this.filters.limit = a), (this.filters.page = 1);
            },
            makeSearch(a) {
              (this.filters.search = a), (this.filters.page = 1);
            },
            makeAction(a, s, e) {
              if ("delete" == a && !confirm("Are you sure?")) return;
              const t = new URL(window.location.origin + this.url + "action/"),
                i = new FormData();
              i.append("id", e),
                i.append("route", s),
                i.append("type", a),
                fetch(t, {
                  method: "POST",
                  body: i,
                  headers: { "X-CSRFToken": na() },
                })
                  .then((a) => a.json())
                  .then((a) => {
                    "redirect" == a.type
                      ? (window.location.href = a.url)
                      : this.getData();
                  })
                  .catch((a) => {
                    this.error = a;
                  });
            },
            setPagination(a) {
              const s = this.filters.limit,
                e = this.filters.page,
                t = Math.ceil(a / s || 1);
              let i = !1,
                l = !1;
              const n = [];
              for (let o = 1; o <= t; o++)
                (o <= 2 || o >= t - 1 || (o >= e - 2 && o <= e + 2)) &&
                  n.push(o),
                  3 === o && e - 4 > 2 && n.push("..."),
                  o === t - 2 && e + 4 < t - 1 && n.push("..."),
                  1 === o && 1 !== e && (l = !0),
                  o === t && e !== t && (i = !0);
              this.pagination = {
                current_page: e,
                pages: n,
                has_next: i,
                has_prev: l,
                total: a,
              };
            },
          },
          watch: {
            filters: {
              handler() {
                this.getData();
              },
              deep: !0,
            },
          },
        };
        const ua = (0, da.Z)(ba, [["render", ga]]);
        var va = ua;
        (0, t.ri)({
          components: { "data-table": fa, "group-details": va },
        }).mount("#top");
      },
    },
    s = {};
  function e(t) {
    var i = s[t];
    if (void 0 !== i) return i.exports;
    var l = (s[t] = { exports: {} });
    return a[t].call(l.exports, l, l.exports, e), l.exports;
  }
  (e.m = a),
    (function () {
      var a = [];
      e.O = function (s, t, i, l) {
        if (!t) {
          var n = 1 / 0;
          for (d = 0; d < a.length; d++) {
            (t = a[d][0]), (i = a[d][1]), (l = a[d][2]);
            for (var o = !0, r = 0; r < t.length; r++)
              (!1 & l || n >= l) &&
              Object.keys(e.O).every(function (a) {
                return e.O[a](t[r]);
              })
                ? t.splice(r--, 1)
                : ((o = !1), l < n && (n = l));
            if (o) {
              a.splice(d--, 1);
              var c = i();
              void 0 !== c && (s = c);
            }
          }
          return s;
        }
        l = l || 0;
        for (var d = a.length; d > 0 && a[d - 1][2] > l; d--) a[d] = a[d - 1];
        a[d] = [t, i, l];
      };
    })(),
    (function () {
      e.d = function (a, s) {
        for (var t in s)
          e.o(s, t) &&
            !e.o(a, t) &&
            Object.defineProperty(a, t, { enumerable: !0, get: s[t] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (a) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (a, s) {
        return Object.prototype.hasOwnProperty.call(a, s);
      };
    })(),
    (function () {
      e.r = function (a) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(a, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var a = { 143: 0 };
      e.O.j = function (s) {
        return 0 === a[s];
      };
      var s = function (s, t) {
          var i,
            l,
            n = t[0],
            o = t[1],
            r = t[2],
            c = 0;
          if (
            n.some(function (s) {
              return 0 !== a[s];
            })
          ) {
            for (i in o) e.o(o, i) && (e.m[i] = o[i]);
            if (r) var d = r(e);
          }
          for (s && s(t); c < n.length; c++)
            (l = n[c]), e.o(a, l) && a[l] && a[l][0](), (a[l] = 0);
          return e.O(d);
        },
        t = (self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []);
      t.forEach(s.bind(null, 0)), (t.push = s.bind(null, t.push.bind(t)));
    })();
  var t = e.O(void 0, [998], function () {
    return e(9049);
  });
  t = e.O(t);
})();
//# sourceMappingURL=app.js.map
