import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    path?: string;
    icon?: string;
    group?: string;
    groupedNavRoutes?: NavRoute[];
    tipo?: string;
}

export const sideNavPath = 'nav/:dni';

export const navRoutes: NavRoute[] = [
    {
        tipo: 'paciente',
        data: { title: 'inicio' },
        icon: 'home',
        path: 'home',
        loadChildren: () =>
            import('./pages/home-page/home-page.module').then(
                m => m.HomePageModule,
            ),
    },
    {
        tipo: 'administrador',
        data: { title: 'Carga Manual Horarios' },
        icon: 'home',
        path: 'carga-manual-horario',
        loadChildren: () =>
            import('./pages/carga-horario/carga-horario-manual/carga-horario-manual.module').then(
                m => m.CargaHorarioManualModule,
            ),
    },
    {
        tipo: 'paciente',
        data: { title: 'Especialidades' },
        icon: 'home',
        path: 'especialidades',
        loadChildren: () =>
            import('./pages/especialidades/especialidades.module').then(
                m => m.EspecialidadesModule,
            ),
    },
    {
        tipo: 'paciente',
        data: { title: 'Reserva Citas' },
        icon: 'home',
        path: 'reserva-citas',
        loadChildren: () =>
            import('./pages/reserva-citas/reserva-citas.module').then(
                m => m.ReservaCitasModule,
            ),
    },
    {
        path: 'especialidades/:idEspecialidad',
        loadChildren: () =>
            import('./pages/especialidades/especialidades-ver-mas/especialidades-ver-mas.module').then(
                m => m.EspecialidadesVerMasModule,
            ),
    },
    {
        tipo: 'paciente',
        data: { title: 'Historial Citas' },
        icon: 'home',
        path: 'historial-citas',
        loadChildren: () =>
            import('./pages/historial-citas/historial-citas.module').then(
                m => m.HistorialCitasModule,
            ),
    },
    {
        path: 'reserva-cita/:idMedico/:idPaciente/:fecha',
        loadChildren: () =>
            import('./pages/reserva-citas/tipo-pago/tipo-pago.module').then(
                m => m.TipoPagoModule,
            ),
    },
    {
        path: 'carga-manual-horario/:idMedico',
        loadChildren: () =>
            import('./pages/carga-horario/carga-horario-manual/medico-combos/medico-combos.module').then(
                m => m.MedicoCombosModule,
            ),
    },
    {
        tipo: 'administrador',
        data: { title: 'Carga Masiva Horarios' },
        icon: 'home',
        path: 'carga-masiva-horario',
        loadChildren: () =>
            import('./pages/carga-horario/carga-horario-masiva/carga-horario-masiva.module').then(
                m => m.CargaHorarioMasivaModule,
            ),
    },
    {   
        tipo: 'administrador',
        data: { title: 'Usuarios' },
        icon: 'home',
        path: 'usuarios',
        loadChildren: () =>
            import('./pages/usuarios/usuarios.module').then(
                m => m.UsuariosModule,
            ),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;
    navRoutes: NavRoute[];

    constructor(router: Router) {
        this.navRoute = router.config.find(route => route.path === sideNavPath);
        this.navRoutes = this.navRoute.children
            .filter(route => route.data && route.data.title)
            .reduce((groupedList: NavRoute[], route: NavRoute) => {
                if (route.group) {
                    const group: NavRoute = groupedList.find(navRoute => {
                        return (
                            navRoute.group === route.group &&
                            navRoute.groupedNavRoutes !== undefined
                        );
                    });
                    if (group) {
                        group.groupedNavRoutes.push(route);
                    } else {
                        groupedList.push({
                            group: route.group,
                            groupedNavRoutes: [route],
                        });
                    }
                } else {
                    groupedList.push(route);
                }
                return groupedList;
            }, []);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoutes;
    }
}
