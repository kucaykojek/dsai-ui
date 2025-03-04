'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var DialogPrimitive = require('@radix-ui/react-dialog');
var reactIcons = require('@radix-ui/react-icons');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var ToastPrimitives = require('@radix-ui/react-toast');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

var buttonVariants = classVarianceAuthority.cva('inline-flex justify-center items-center disabled:opacity-50 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium text-sm transition-colors disabled:pointer-events-none', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'underline-offset-4 hover:underline text-primary',
        },
        size: {
            default: 'h-10 py-2 px-4',
            sm: 'h-9 px-3 rounded-md',
            lg: 'h-11 px-8 rounded-md',
            icon: 'h-10 w-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
var Button = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    var Comp = asChild ? reactSlot.Slot : 'button';
    return (jsxRuntime.jsx(Comp, __assign({ className: cn(buttonVariants({ variant: variant, size: size, className: className })), ref: ref }, props)));
});
Button.displayName = 'Button';

var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, __assign({ ref: ref, className: cn('fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className) }, props)));
});
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (jsxRuntime.jsxs(DialogPortal, { children: [jsxRuntime.jsx(DialogOverlay, {}), jsxRuntime.jsxs(DialogPrimitive__namespace.Content, __assign({ ref: ref, className: cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', className) }, props, { children: [children, jsxRuntime.jsxs(DialogPrimitive__namespace.Close, __assign({ className: "top-4 right-4 absolute data-[state=open]:bg-accent opacity-70 hover:opacity-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2 data-[state=open]:text-muted-foreground transition-opacity disabled:pointer-events-none" }, { children: [jsxRuntime.jsx(reactIcons.Cross2Icon, { className: "w-4 h-4" }), jsxRuntime.jsx("span", __assign({ className: "sr-only" }, { children: "Close" }))] }))] }))] }));
});
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", __assign({ className: cn('flex flex-col space-y-1.5 text-center sm:text-left', className) }, props)));
};
DialogHeader.displayName = 'DialogHeader';
var DialogFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", __assign({ className: cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className) }, props)));
};
DialogFooter.displayName = 'DialogFooter';
var DialogTitle = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(DialogPrimitive__namespace.Title, __assign({ ref: ref, className: cn('text-lg font-semibold leading-none tracking-tight', className) }, props)));
});
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(DialogPrimitive__namespace.Description, __assign({ ref: ref, className: cn('text-sm text-muted-foreground', className) }, props)));
});
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;

var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, __assign({ ref: ref, className: cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', inset && 'pl-8', className) }, props, { children: [children, jsxRuntime.jsx(reactIcons.ChevronRightIcon, { className: "ml-auto w-4 h-4" })] })));
});
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.SubContent, __assign({ ref: ref, className: cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className) }, props)));
});
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, props = __rest(_a, ["className", "sideOffset"]);
    return (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, __assign({ ref: ref, sideOffset: sideOffset, className: cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className) }, props)) }));
});
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Item, __assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', inset && 'pl-8', className) }, props)));
});
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, __assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className), checked: checked }, props, { children: [jsxRuntime.jsx("span", __assign({ className: "left-2 absolute flex justify-center items-center w-3.5 h-3.5" }, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(reactIcons.CheckIcon, { className: "w-4 h-4" }) }) })), children] })));
});
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, __assign({ ref: ref, className: cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className) }, props, { children: [jsxRuntime.jsx("span", __assign({ className: "left-2 absolute flex justify-center items-center w-3.5 h-3.5" }, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(reactIcons.CircleIcon, { className: "fill-current w-2 h-2" }) }) })), children] })));
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Label, __assign({ ref: ref, className: cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className) }, props)));
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, __assign({ ref: ref, className: cn('-mx-1 my-1 h-px bg-muted', className) }, props)));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx("span", __assign({ className: cn('ml-auto text-xs tracking-widest opacity-60', className) }, props)));
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Viewport, __assign({ ref: ref, className: cn('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className) }, props)));
});
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva('group data-[state=closed]:slide-out-to-right-full data-[state=open]:sm:slide-in-from-bottom-full relative flex justify-between items-center space-x-4 data-[state=open]:slide-in-from-top-full shadow-lg p-6 pr-8 border rounded-md w-full overflow-hidden transition-all data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out pointer-events-auto data-[state=closed]:fade-out-80', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
var Toast = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Root, __assign({ ref: ref, className: cn(toastVariants({ variant: variant }), className) }, props)));
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Action, __assign({ ref: ref, className: cn('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className) }, props)));
});
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Close, __assign({ ref: ref, className: cn('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className), "toast-close": "" }, props, { children: jsxRuntime.jsx(reactIcons.Cross2Icon, { className: "w-4 h-4" }) })));
});
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Title, __assign({ ref: ref, className: cn('text-sm font-semibold', className) }, props)));
});
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React__namespace.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (jsxRuntime.jsx(ToastPrimitives__namespace.Description, __assign({ ref: ref, className: cn('text-sm opacity-90', className) }, props)));
});
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;

var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1000000;
var count = 0;
function genId() {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}
var toastTimeouts = new Map();
var addToRemoveQueue = function (toastId) {
    if (toastTimeouts.has(toastId)) {
        return;
    }
    var timeout = setTimeout(function () {
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId,
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'ADD_TOAST':
            return __assign(__assign({}, state), { toasts: __spreadArray([action.toast], state.toasts, true).slice(0, TOAST_LIMIT) });
        case 'UPDATE_TOAST':
            return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) {
                    return t.id === action.toast.id ? __assign(__assign({}, t), action.toast) : t;
                }) });
        case 'DISMISS_TOAST': {
            var toastId_1 = action.toastId;
            // ! Side effects ! - This could be extracted into a dismissToast() action,
            // but I'll keep it here for simplicity
            if (toastId_1) {
                addToRemoveQueue(toastId_1);
            }
            else {
                state.toasts.forEach(function (toast) {
                    addToRemoveQueue(toast.id);
                });
            }
            return __assign(__assign({}, state), { toasts: state.toasts.map(function (t) {
                    return t.id === toastId_1 || toastId_1 === undefined
                        ? __assign(__assign({}, t), { open: false }) : t;
                }) });
        }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return __assign(__assign({}, state), { toasts: [] });
            }
            return __assign(__assign({}, state), { toasts: state.toasts.filter(function (t) { return t.id !== action.toastId; }) });
    }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach(function (listener) {
        listener(memoryState);
    });
}
function toast(_a) {
    var props = __rest(_a, []);
    var id = genId();
    var update = function (props) {
        return dispatch({
            type: 'UPDATE_TOAST',
            toast: __assign(__assign({}, props), { id: id }),
        });
    };
    var dismiss = function () { return dispatch({ type: 'DISMISS_TOAST', toastId: id }); };
    dispatch({
        type: 'ADD_TOAST',
        toast: __assign(__assign({}, props), { id: id, open: true, onOpenChange: function (open) {
                if (!open)
                    dismiss();
            } }),
    });
    return {
        id: id,
        dismiss: dismiss,
        update: update,
    };
}
function useToast() {
    var _a = React__namespace.useState(memoryState), state = _a[0], setState = _a[1];
    React__namespace.useEffect(function () {
        listeners.push(setState);
        return function () {
            var index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);
    return __assign(__assign({}, state), { toast: toast, dismiss: function (toastId) { return dispatch({ type: 'DISMISS_TOAST', toastId: toastId }); } });
}

function Toaster() {
    var toasts = useToast().toasts;
    return (jsxRuntime.jsxs(ToastProvider, { children: [toasts.map(function (_a) {
                var id = _a.id, title = _a.title, description = _a.description, action = _a.action, props = __rest(_a, ["id", "title", "description", "action"]);
                return (jsxRuntime.jsxs(Toast, __assign({}, props, { children: [jsxRuntime.jsxs("div", __assign({ className: "gap-1 grid" }, { children: [title && jsxRuntime.jsx(ToastTitle, { children: title }), description && (jsxRuntime.jsx(ToastDescription, { children: description }))] })), action, jsxRuntime.jsx(ToastClose, {})] }), id));
            }), jsxRuntime.jsx(ToastViewport, {})] }));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:Poppins,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}:root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--card:0 0% 100%;--card-foreground:222.2 84% 4.9%;--popover:0 0% 100%;--popover-foreground:222.2 84% 4.9%;--primary:222.2 47.4% 11.2%;--primary-foreground:210 40% 98%;--secondary:210 40% 96.1%;--secondary-foreground:222.2 47.4% 11.2%;--muted:210 40% 96.1%;--muted-foreground:215.4 16.3% 46.9%;--accent:210 40% 96.1%;--accent-foreground:222.2 47.4% 11.2%;--destructive:0 84.2% 60.2%;--destructive-foreground:210 40% 98%;--border:214.3 31.8% 91.4%;--input:214.3 31.8% 91.4%;--ring:222.2 84% 4.9%;--radius:0.5rem}*{border-color:hsl(var(--border))}body{font-feature-settings:\"rlig\" 1,\"calt\" 1;background-color:hsl(var(--background));color:hsl(var(--foreground))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.left-2{left:.5rem}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-0{top:0}.top-2{top:.5rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.ml-auto{margin-left:auto}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-px{height:1px}.max-h-screen{max-height:100vh}.w-10{width:2.5rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.max-w-lg{max-width:32rem}.shrink-0{flex-shrink:0}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.translate-x-\\[-50\\%\\],.translate-y-\\[-50\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-4{gap:1rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-destructive{border-color:hsl(var(--destructive))}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:rgba(0,0,0,.8)}.bg-destructive{background-color:hsl(var(--destructive))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.fill-current{fill:currentColor}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pr-8{padding-right:2rem}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-foreground\\/50{color:hsl(var(--foreground)/.5)}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-90{opacity:.9}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color:hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive)/.9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary)/.9)}.hover\\:bg-secondary:hover{background-color:hsl(var(--secondary))}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary)/.8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-foreground:hover{color:hsl(var(--foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:opacity-100:focus{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color:hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.group.destructive .group-\\[\\.destructive\\]\\:border-muted\\/40{border-color:hsl(var(--muted)/.4)}.group.destructive .group-\\[\\.destructive\\]\\:text-red-300{--tw-text-opacity:1;color:rgb(252 165 165/var(--tw-text-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:border-destructive\\/30:hover{border-color:hsl(var(--destructive)/.3)}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:bg-destructive:hover{background-color:hsl(var(--destructive))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-destructive-foreground:hover{color:hsl(var(--destructive-foreground))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover{--tw-text-opacity:1;color:rgb(254 242 242/var(--tw-text-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-destructive:focus{--tw-ring-color:hsl(var(--destructive))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(248 113 113/var(--tw-ring-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus{--tw-ring-offset-color:#dc2626}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe=cancel]{--tw-translate-x:0px}.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe=cancel],.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe=end]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe=end]{--tw-translate-x:var(--radix-toast-swipe-end-x)}.data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe=move]{--tw-translate-x:var(--radix-toast-swipe-move-x);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[swipe\\=move\\]\\:transition-none[data-swipe=move]{transition-property:none}@media (min-width:640px){.sm\\:bottom-0{bottom:0}.sm\\:right-0{right:0}.sm\\:top-auto{top:auto}.sm\\:flex-row{flex-direction:row}.sm\\:flex-col{flex-direction:column}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (min-width:768px){.md\\:max-w-\\[420px\\]{max-width:420px}}";
var stylesheet="*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:Poppins,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}:root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--card:0 0% 100%;--card-foreground:222.2 84% 4.9%;--popover:0 0% 100%;--popover-foreground:222.2 84% 4.9%;--primary:222.2 47.4% 11.2%;--primary-foreground:210 40% 98%;--secondary:210 40% 96.1%;--secondary-foreground:222.2 47.4% 11.2%;--muted:210 40% 96.1%;--muted-foreground:215.4 16.3% 46.9%;--accent:210 40% 96.1%;--accent-foreground:222.2 47.4% 11.2%;--destructive:0 84.2% 60.2%;--destructive-foreground:210 40% 98%;--border:214.3 31.8% 91.4%;--input:214.3 31.8% 91.4%;--ring:222.2 84% 4.9%;--radius:0.5rem}*{border-color:hsl(var(--border))}body{font-feature-settings:\"rlig\" 1,\"calt\" 1;background-color:hsl(var(--background));color:hsl(var(--foreground))}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.left-2{left:.5rem}.left-\\[50\\%\\]{left:50%}.right-2{right:.5rem}.right-4{right:1rem}.top-0{top:0}.top-2{top:.5rem}.top-4{top:1rem}.top-\\[50\\%\\]{top:50%}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.my-1{margin-bottom:.25rem;margin-top:.25rem}.ml-auto{margin-left:auto}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-px{height:1px}.max-h-screen{max-height:100vh}.w-10{width:2.5rem}.w-2{width:.5rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-full{width:100%}.min-w-\\[8rem\\]{min-width:8rem}.max-w-lg{max-width:32rem}.shrink-0{flex-shrink:0}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.translate-x-\\[-50\\%\\],.translate-y-\\[-50\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-4{gap:1rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.border{border-width:1px}.border-destructive{border-color:hsl(var(--destructive))}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-black\\/80{background-color:rgba(0,0,0,.8)}.bg-destructive{background-color:hsl(var(--destructive))}.bg-muted{background-color:hsl(var(--muted))}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.fill-current{fill:currentColor}.p-1{padding:.25rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-8{padding-left:2rem}.pr-2{padding-right:.5rem}.pr-8{padding-right:2rem}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:hsl(var(--foreground))}.text-foreground\\/50{color:hsl(var(--foreground)/.5)}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.opacity-0{opacity:0}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-90{opacity:.9}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color:hsl(var(--background))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive)/.9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary)/.9)}.hover\\:bg-secondary:hover{background-color:hsl(var(--secondary))}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary)/.8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-foreground:hover{color:hsl(var(--foreground))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:opacity-100:focus{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color:hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:opacity-100{opacity:1}.group.destructive .group-\\[\\.destructive\\]\\:border-muted\\/40{border-color:hsl(var(--muted)/.4)}.group.destructive .group-\\[\\.destructive\\]\\:text-red-300{--tw-text-opacity:1;color:rgb(252 165 165/var(--tw-text-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:border-destructive\\/30:hover{border-color:hsl(var(--destructive)/.3)}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:bg-destructive:hover{background-color:hsl(var(--destructive))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-destructive-foreground:hover{color:hsl(var(--destructive-foreground))}.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover{--tw-text-opacity:1;color:rgb(254 242 242/var(--tw-text-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-destructive:focus{--tw-ring-color:hsl(var(--destructive))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(248 113 113/var(--tw-ring-opacity,1))}.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus{--tw-ring-offset-color:#dc2626}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe=cancel]{--tw-translate-x:0px}.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe=cancel],.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe=end]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe=end]{--tw-translate-x:var(--radix-toast-swipe-end-x)}.data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe=move]{--tw-translate-x:var(--radix-toast-swipe-move-x);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[swipe\\=move\\]\\:transition-none[data-swipe=move]{transition-property:none}@media (min-width:640px){.sm\\:bottom-0{bottom:0}.sm\\:right-0{right:0}.sm\\:top-auto{top:auto}.sm\\:flex-row{flex-direction:row}.sm\\:flex-col{flex-direction:column}.sm\\:justify-end{justify-content:flex-end}.sm\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:text-left{text-align:left}}@media (min-width:768px){.md\\:max-w-\\[420px\\]{max-width:420px}}";
styleInject(css_248z,{"insertAt":"top"});

exports.Button = Button;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.buttonVariants = buttonVariants;
exports.reducer = reducer;
exports.stylesheet = stylesheet;
exports.toast = toast;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
