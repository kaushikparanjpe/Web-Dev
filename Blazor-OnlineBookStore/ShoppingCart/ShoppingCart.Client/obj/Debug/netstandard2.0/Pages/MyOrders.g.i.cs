#pragma checksum "C:\Users\hp\Documents\NEU Subjects\Fall 2018\WebDev\FinalProject\Part3\ShoppingCart\ShoppingCart.Client\Pages\MyOrders.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "958f2e8f0200ba72c9b66896534379c88209002d"
// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace ShoppingCart.Client.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Blazor;
    using Microsoft.AspNetCore.Blazor.Components;
    using System.Net.Http;
    using Microsoft.AspNetCore.Blazor.Layouts;
    using Microsoft.AspNetCore.Blazor.Routing;
    using Microsoft.JSInterop;
    using ShoppingCart.Client;
    using ShoppingCart.Client.Shared;
    using ShoppingCart.Shared.Models;
    [Microsoft.AspNetCore.Blazor.Layouts.LayoutAttribute(typeof(UserMainLayout))]

    [Microsoft.AspNetCore.Blazor.Components.RouteAttribute("/MyOrders")]
    public class MyOrders : Microsoft.AspNetCore.Blazor.Components.BlazorComponent
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Blazor.RenderTree.RenderTreeBuilder builder)
        {
        }
        #pragma warning restore 1998
#line 80 "C:\Users\hp\Documents\NEU Subjects\Fall 2018\WebDev\FinalProject\Part3\ShoppingCart\ShoppingCart.Client\Pages\MyOrders.cshtml"
                   

            bool isView = false;
            int listcount;
            Orders[] myOrders;
            Products prod;
            protected override async Task OnInitAsync()
            {
                Console.WriteLine("User" + ThisUser.Usrnm);
                myOrders = await Http.GetJsonAsync<Orders[]>("/api/Orders/user/" + ThisUser.Usrnm);

            }

            public async Task viewDetails(string prodId)
            {
                prod = await Http.GetJsonAsync<Products>("/api/Product/" + prodId);
                isView = true;
            }


            public void printCountInList()
            {
                listcount = OrderList.cartItems.Count;
            }

            public void closeModal()
            {
                isView = false;
            }

        

#line default
#line hidden
        [global::Microsoft.AspNetCore.Blazor.Components.InjectAttribute] private Microsoft.AspNetCore.Blazor.Services.IUriHelper UriHelper { get; set; }
        [global::Microsoft.AspNetCore.Blazor.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591
