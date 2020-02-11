import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { InteractionComponent } from './interaction/interaction.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DisplayHerosComponent } from './display-heros/display-heros.component';
import { DisplayDevComponent } from './display-dev/display-dev.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';



@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent, TemplateSyntaxComponent, CustomEventsComponent, TwoWayBindingComponent, DirectivesComponent, InteractionComponent, LifecycleHooksComponent, HeroDetailsComponent, DisplayHerosComponent, DisplayDevComponent, HeroBioComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsTemplatesModule { }
