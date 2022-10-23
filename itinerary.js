"use strict";

// itinerary.html
//  A simple app to generate and print multiple copies of an itinerary
//  Craig Fitzgerald
//
// todo:
//  remove empty lines on clone

var SAMPLE_STATE  = `{"name":"Default","tables":[{"date":"Wednesday, October 12, 2022","day":"Day 1","rows":[{"c0":"3:00 pm","c1":"SWB Inn","c2":"","c3":"","c4":"","c5":"Hotel Check-in and Program Registration"},{"c0":"4:00 - 5:00 pm","c1":"Pavilion","c2":"","c3":"352 371 9136","c4":"","c5":"Orientation"},{"c0":"5:00 - 6:00 pm","c1":"SWB Hall","c2":"Lars Andersen","c3":"","c4":"","c5":"Powerpoint into to week with Wine&Cheese"},{"c0":"6:30 pm","c1":"SWB Front Porch","c2":"Cornelia Holbrook","c3":"352 317 7782","c4":"Dinner at SWB","c5":"History of SWB. Dinner by Chef Bridget"},{"c0":"7:30 pm","c1":"SWB Hall","c2":"","c3":"","c4":"","c5":"Florida documentary Movie"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Thursday, October 13, 2022","day":"Day 2","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"9:00 - 11:30 am","c1":"Florida Springs Institute - High Springs FL","c2":"Bob Knight","c3":"","c4":"","c5":"Ovewrview of Springs in North Central Florida"},{"c0":"12:00 - 1:00 pm","c1":"Ichetucknee State Park - North Entrance","c2":"","c3":"","c4":"Lunch","c5":"Picnic Lunch"},{"c0":"1:30 - 4:00 pm","c1":"Kayak on the Ichetucknee","c2":"Lars Andersen","c3":"","c4":"","c5":"Learn about this Magnificent Spring and River"},{"c0":"4:00 - 6:00 pm","c1":"","c2":"","c3":"","c4":"","c5":"Free Time"},{"c0":"6:15 - 7:00 pm","c1":"SWB Inn","c2":"","c3":"","c4":"Dinner","c5":"Dinner prepared by Chef Bridget"},{"c0":"7:00 - 8:00 pm","c1":"McKenzie Hall","c2":"","c3":"","c4":"","c5":"Documentary Movie"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Friday, October 14, 2022","day":"Day 3","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":"Restroom Stop in High Springs - No Restroom at the 27 Bridge"},{"c0":"9:00am - 12:30pm","c1":"Santa Fe River at The 27 Bridge","c2":"Lars Anderson","c3":"","c4":"","c5":"Interpretive River Run"},{"c0":"12:30 - 1:30 pm","c1":"Lunch at Blue Springs State Park","c2":"Park Ranger","c3":"","c4":"Lunch","c5":"Lunch with Park Ranger & Short Talk"},{"c0":"1:30 - 3:00pm","c1":"Continue Down Santa Fe River and at the 41 Bridge","c2":"Lars Anderson","c3":"","c4":"","c5":""},{"c0":"4:00 - 6:00 pm","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"6:00 - 7:00 pm","c1":"Harry's Seafood and More","c2":"","c3":"","c4":"Dinner","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Saturday, October 15, 2022","day":"Day 4","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Sunday, October 16, 2022","day":"Day 5","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Monday, October 17, 2022","day":"Day 6","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Tuesday, October 18, 2022","day":"Day 7","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"}]}`;
var DEFAULT_STATE = `{"name":"Default","tables":[{"date":"Sunday, October 23, 2022","day":"Day 1","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Monday, October 24, 2022","day":"Day 2","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Tuesday, October 25, 2022","day":"Day 3","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Wednesday, October 26, 2022","day":"Day 4","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Thursday, October 27, 2022","day":"Day 5","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Friday, October 28, 2022","day":"Day 6","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Saturday, October 29, 2022","day":"Day 7","rows":[{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"}]}`;

class ItineraryPageHandler {
   constructor(options) {
      this.tables        = 7;
      this.copies        = 18;
      this.saveDelay     = 1000;
      this.baseURL       = "/cgi-bin/itineraries.pl";
      this.itineraryName = "Default"
      this.itineraryId   = 0;
      this.templates     = {};
      this.timer         = 0;
      this.storeId       = "itinerary-id";

      $("#date").get(0).valueAsDate = new Date();

      $("body").on("input", "[contenteditable]", (e) => this.DataChanged());
      $("body").on("click", ".go",     (e) => this.GoHandler(e));
      $("body").on("click", ".select", (e) => this.SelectHandler(e));
      $("body").on("click", ".delete", (e) => this.DeleteHandler(e));
      $("body").on("click", ".cancel", (e) => this.DisplayPane(0));
      $(".header img").on("click", (e) => this.Debug());

      $("#newBtn"   ).on("click", () => this.NewHandler()   );
      $("#loadBtn"  ).on("click", () => this.LoadHandler()  );
      $("#saveBtn"  ).on("click", () => this.SaveHandler()  );
      $("#importBtn").on("click", () => this.ImportHandler());
      $("#exportBtn").on("click", () => this.ExportHandler());
      $("#printBtn" ).on("click", () => this.PrintHandler() );
      $("#backBtn"  ).on("click", () => this.BackHandler()  );
      $("#date"     ).on("change",() => this.DateHandler()  );
      $("#name"     ).on("change",() => this.NameHandler()  );

      this.StashTemplates();
      this.LoadLastState();
      this.DisplayPane(0);
   }

   async LoadLastState() {
      let id = localStorage.getItem(this.storeId);
      if (!id) return this.LoadDefaultState();

      let itinerary = await this.LoadItinerary(id);
      this.itineraryId = id;
      this.itineraryName = itinerary.name;
      this.StateToDOM(itinerary);
      this.isNew = 0;
      this.DisplayPane(0);
   }

   async LoadDefaultState() {
      this.StateToDOM(this.DefaultState());
      this.SetDates();
      this.itineraryId = 0;
      this.isNew = 1;
      return;
   }

   //---------------------------- handlers ---------------------------

   NewHandler() {   
      this.LoadDefaultState();
   }

   async LoadHandler() {  
      $("#itineraries tbody").empty();
      let itineraries = await this.LoadItineraries();
      for (let itinerary of itineraries) {
         $("#itineraries tbody").append(this.Template("itinerary", itinerary));
      }
      this.DisplayPane(2);
   }

   async SelectHandler(e) {
      this.itineraryId = $(e.currentTarget).closest("tr").data("id");

      console.log("select", this.itineraryId);

      let itinerary = await this.LoadItinerary(this.itineraryId);
      this.itineraryName = itinerary.name;
      this.StateToDOM(itinerary);
      this.isNew = 0;
      this.DisplayPane(0);
   }

   SaveHandler() {  
      this.SaveItinerary();
   }

   async ImportHandler() {
      let fileHandle;
      if (!window.showOpenFilePicker) {
         alert ("You need to be using https!");
      }
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      let state = JSON.parse(contents); 

      this.StateToDOM(state);
      this.isNew = 1;
      this.itineraryId = 0;
   }

   async ExportHandler() {
      let saveFile = "";
      try {
         if (!window.showSaveFilePicker) {
            alert ("You need to be using https!");
         }
         saveFile = await window.showSaveFilePicker({
             suggestedName: `${this.itineraryName}.json`
         });
         const file = await saveFile.getFile();
         const contents = await file.text();
      } catch(e) {
         console.log(e);
      }
      let writable = await saveFile.createWritable();
      let state = this.DOMToState();
      await writable.write(state);
      await writable.close();
   }

   // todo: remove empty rows
   GoHandler(e) {
      let table = $(e.currentTarget).closest("table");
      $("#results .tables").empty();

      let clone = $('<table class="itinerary">' + table.html() + '</table>');
      clone.find("th, td").removeAttr("contenteditable");
      clone.find("tr").each ((i, row) => {
         row = $(row);
         if (!row.find("td").length) return;
         let empty = true;
         row.find("td").each ((i, col) => {
            empty = empty && !$(col).text();
         });
         if (empty) row.remove();
      });
      for (let i=0; i<this.copies; i++) {
         $("#results .tables").append(clone.clone());
      }

//      for (let i=0; i<18; i++) {
//         $("#results").append("<table>" + table.html() + "</table>");
//      }
//      $("#results table th, #results table td").removeAttr("contenteditable");
      this.DisplayPane(1);
   }

   PrintHandler() { 
      window.print();
   }

   BackHandler() {  
      this.DisplayPane(0);
   }

   DateHandler() {
      this.SetDates();
      this.DataChanged();
   }

   NameHandler() {
      this.itineraryName = $('#name').val();
      this.itineraryId = 0;
      this.isNew = 1;
      this.DataChanged();
   }

   async DeleteHandler(e) {
      let id = $(e.currentTarget).closest("tr").data("id");
      console.log("delete", id);

      await this.DeleteItinerary(id);
      await this.LoadHandler();

      return false;
   }

   //---------------------------- io ---------------------------

   async LoadItineraries() {
      let response = await fetch(`${this.baseURL}/itineraries`);
      return await response.json();
   }

   async LoadItinerary(id) {
      let response = await fetch(`${this.baseURL}/itinerary/${id}`);
      return await response.json();
   }

   async SaveItinerary() {
      this.isNew ? await this.SaveNewItinerary() : await this.UpdateItinerary();
      this.isNew = 0;
      localStorage.setItem(this.storeId, this.itineraryId);
   }

   async SaveNewItinerary() {
      let response = await fetch(`${this.baseURL}/itineraries`, this.GetOpt('POST'));
      this.itineraryId = await response.text() - 0;
   }

   async UpdateItinerary() {
      let response = await fetch(`${this.baseURL}/itinerary/${this.itineraryId}`, this.GetOpt('PUT'));
   }

   async DeleteItinerary(id) {
      let response = await fetch(`${this.baseURL}/itinerary/${id}`, {method: 'DELETE'});
   }

   GetOpt(method) {
      return {
         method:  method, 
         mode:    'cors',
         headers: {'Content-Type': 'application/json'},
         body:    this.DOMToState()
      };
   }

   //---------------------------- app util ---------------------------

   StateToDOM(state) {
      $("#forms table").detach();
      this.itineraryName = state.name;
      $("#name").val(state.name);
      for (let table of state.tables) {
         $("#forms").append(this.Template("table", table));
         let tableNode = $("#forms table:last-of-type");
         for (let row of table.rows) {
            tableNode.find("tbody").append(this.Template("row", row));
         }
      }
      console.log("state loaded");
   }

   DOMToState() {
      let state = {name: this.itineraryName, tables: []};
      $("#forms table").each((i, table) => {   
         state.tables.push(this.GetTableData($(table)))
      });
      return JSON.stringify(state);
   }

   GetTableData(table) {
      let rows = [];
      table.find("tr").each((i, row) => {
         let cols = this.GetRowData($(row));
         if (cols) rows.push(cols);
      });

      let data = {
         id    : table.attr("id"),
         date  : table.find(".date").text(),
         day   : table.find(".day").text(),
      }
      return Object.assign(data, {rows}, this.GetLabelData(table));
   }
   
   GetLabelData(table) {
      let labels = {};
      for (let i=0; i<6; i++) {
         labels[`l${i}`] = table.find(`.l${i}`).text();
      }
      return labels;
   }

   GetRowData(row) {
      if (row.find('th').length) return;

      let columns = {};
      row.find('td').each((i, column) => {
         column = $(column);
         columns[column.attr('class')] = column.text();
      });
      return columns;
   }

   SetDates() {
      let date = new Date($("#date").val());

      $("#forms table").each((i, table) => {
         $(table).find(".date").text(this.DateString(date, i+1));
      });
   }

   DisplayPane(page) {
      ["#forms", "#results", "#itineraries"].forEach (pane => {
         $(pane).hide();
      })
      page == 1 ? $("#results"    ).show() :
      page == 2 ? $("#itineraries").show() :
                  $("#forms"      ).show() ;
   }

   DataChanged(e) {
      if (this.timer) window.clearTimeout(this.timer);
      this.timer = window.setTimeout((e) => this.SaveItinerary(), this.saveDelay);
   }

   PrintPrep(e) {
      //console.log("printprep", e);
      let table = $(e.currentTarget).closest("table");

      $("#results .tables").empty();
      for (let i=0; i<18; i++) {
         $("#results").append("<table>" + table.html() + "</table>");
      }
      $("#results table th, #results table td").removeAttr("contenteditable");

      this.DisplayPane(1);
   }

//---------------------------- general util ---------------------------

   StashTemplates() {
      this.templates = {};
      $("template").each((i, node) => {
         node = $(node);
         this.templates[node.attr("id")] = node.detach();
      });
   }

   Template(name, data) {
      let html = this.templates[name].html();
      html = html.replace(/{.+?}/g, (m) => {
         return data[m.match(/{(.+)}/)[1]]
      });
      return $(html);
   }

   DateString(date, delta) {
      let dt1 = new Date(date);
      
      let ms = date.getTime() + delta * 1000 * 60 * 60 * 24;
      let dt2 = new Date(ms);

      //return `${dt2}`.substring(0, 16);
      return dt2.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
   }

//---------------------------- debug ---------------------------

   Debug(e) {
      console.log("debug");
      localStorage.removeItem(this.storeId);
      this.StateToDOM(JSON.parse(SAMPLE_STATE));
      this.SetDates();
      this.itineraryId = 0;
      this.isNew = 1;
      this.DisplayPane(0);
   }


   DefaultState(id, date, day) {
      //return JSON.parse(DEFAULT_STATE);

      let tables = [];
      for (let i=1; i<8; i++) {
         tables.push(this.DefaultTable(i,"Sunday January 17  2021", i));
      }
      //tables[0].rows[0] = {c0: "3:00 pm", c1: "SWB Inn", c2: "", c3: "", c4: "", c5: "Hotel Check-in and Program Registration"};
      //tables[0].rows[1] = {c0: "4:00 pm", c1: "pavilion", c2: "", c3: "352-371-9136", c4: "", c5: "Orientation"};
      return {name: "Default", tables};
   }

   DefaultTable(id, date, day) {
      let labels = this.DefaultLabels();
      let rows = [];
      for (let i=0; i<8; i++) {
         rows.push(this.DefaultRow());
      }
      return Object.assign({id, date, day: `Day ${day}`}, labels, {rows});
   }

   DefaultLabels(id, date, day) {
      return {
         l0: "Time"       ,
         l1: "Location"   ,
         l2: "Presenter"  ,
         l3: "Contact"    ,
         l4: "Meal"       ,
         l5: "Description",
      }
   }

   DefaultRow(id, date, day) {
      return {c0: "", c1: "", c2: "", c3: "", c4: "", c5: ""};
   }

}

$(function() {
   let options = {};
   var iph = new ItineraryPageHandler(options);
});


