import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LightboxModule } from "ngx-lightbox";

import {
  AccordionModule,
  AlertModule, // Foundation Callouts
  ButtonsModule,
  CarouselModule, // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule, // Foundation Dropdown Menus and Dropdown Panes
  ModalModule, // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule
} from "ngx-foundation";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { FngAccordionComponent } from "./fng-accordion/fng-accordion.component";
import { GraphicDesignComponent } from "./graphic-design/graphic-design.component";
import { PortfolioLightboxComponent } from "./portfolio-lightbox/portfolio-lightbox.component";
import { MyIllustrationComponent } from "./my-illustration/my-illustration.component";
import { MyIllustration2Component } from "./my-illustration2/my-illustration2.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LightboxModule,
    HttpClientModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    OffcanvasModule.forRoot(),
    FormsModule,

    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "graphic", component: GraphicDesignComponent },
      { path: "illustration", component: MyIllustrationComponent },
      { path: "illustration2", component: MyIllustration2Component }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FngAccordionComponent,
    GraphicDesignComponent,
    PortfolioLightboxComponent,
    MyIllustrationComponent,
    MyIllustration2Component
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {
  title = "blog";
  getValues(val) {
    console.warn(val);
  }
}
