import { NextResponse } from "next/server";
import { auth } from "./auth";

const root = "/";
const publicRoutes = ["/login", "/register", "/api/auth"];
const admin = "/admin";
const user = "/dashboard";

export default auth((request) => {
  const isAuthenticate = request.auth;
  const auth = request.auth;
  const pathname = request.nextUrl.pathname;
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAdminOnlyRoute = pathname.startsWith(admin);
  const isUserOnlyRoute = pathname.startsWith(user);

  if (pathname === root) return NextResponse.next();
  if (isAuthenticate && ["/login", "/register"].includes(pathname)) {
    return Response.redirect(
      new URL(
        auth.user.role === "admin" ? "/admin/dashboard" : "/dashboard",
        request.nextUrl
      )
    );
  } else if (!isAuthenticate && !isPublicRoute) {
    return Response.redirect(new URL("/login", request.nextUrl));
  } else if (isAdminOnlyRoute && isAuthenticate && auth.user.role !== "admin") {
    return Response.redirect(new URL("/dashboard", request.nextUrl));
  } else if (isUserOnlyRoute && isAuthenticate && auth.user.role !== "user") {
    return Response.redirect(new URL("/admin/dashboard", request.nextUrl));
  }
});
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all routes except static files
    "/", // Match root
    "/(api|trpc)(.*)", // Match API routes like /api/auth
  ],
};
