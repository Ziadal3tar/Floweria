import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { AdminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
    // =====================
    // Main App (User)
    // =====================
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home')
                        .then(m => m.Home)
            },
            {
                path: 'products',
                loadComponent: () =>
                    import('./features/products/products/products')
                        .then(m => m.Products)
            },
            {
                path: 'products/:id',
                loadComponent: () =>
                    import('./features/products/product-details/product-details')
                        .then(m => m.ProductDetails)
            },
            {
                path: 'cart',
                loadComponent: () =>
                    import('./features/cart/cart')
                        .then(m => m.Cart)
            },
            {
                path: 'checkout',
                loadComponent: () =>
                    import('./features/checkout/checkout')
                        .then(m => m.Checkout)
            },
            {
                path: 'orders',
                loadComponent: () =>
                    import('./features/orders/orders')
                        .then(m => m.Orders)
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('./features/profile/profile')
                        .then(m => m.Profile)
            }
        ]
    },

    // =====================
    // Auth
    // =====================
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () =>
                    import('./features/auth/login/login')
                        .then(m => m.Login)
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./features/auth/register/register')
                        .then(m => m.Register)
            }
        ]
    },
{
  path: 'admin',
  canActivate: [AdminGuard],
  loadComponent: () =>
    import('./admin/layout/admin-layout/admin-layout')
      .then(m => m.AdminLayout),
  children: [
    {
      path: '',
      loadComponent: () =>
        import('./admin/pages/dashboard/dashboard')
          .then(m => m.AdminDashboard)
    },
    {
      path: 'products',
      loadComponent: () =>
        import('./admin/pages/products/products')
          .then(m => m.Products)
    },
    {
      path: 'orders',
      loadComponent: () =>
        import('./admin/pages/orders/orders')
          .then(m => m.Orders)
    },
    {
      path: 'users',
      loadComponent: () =>
        import('./admin/pages/users/users')
          .then(m => m.Users)
    },
    {
      path: 'admin',
      loadComponent: () =>
        import('./admin/pages/categories/categories')
          .then(m => m.Categories)
    }
  ]
},
    // =====================
    // Fallback
    // =====================
    {
        path: '**',
        redirectTo: ''
    }
];
