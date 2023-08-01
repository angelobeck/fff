
class ModuleLayout extends Module {
    template = `
    <layout-modals>
<mod name="menu" />
<mod name="breadcrumbs" />
<mod name="title" nofocus={menuExpanded} />
<mod name="main" />
</layout-modals>
`;

    menuExpanded = false;
    
    }
