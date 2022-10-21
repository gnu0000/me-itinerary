"use strict";



var DEFAULT_STATE = `{"name":"Default","tables":[{"date":"Wednesday, October 12, 2022","day":"Day 1","rows":[{"c0":"3:00 pm","c1":"SWB Inn","c2":"","c3":"","c4":"","c5":"Hotel Check-in and Program Registration"},{"c0":"4:00 - 5:00 pm","c1":"Pavilion","c2":"","c3":"352 371 9136","c4":"","c5":"Orientation"},{"c0":"5:00 - 6:00 pm","c1":"SWB Hall","c2":"Lars Andersen","c3":"","c4":"","c5":"Powerpoint into to week with Wine&Cheese"},{"c0":"6:30 pm","c1":"SWB Front Porch","c2":"Cornelia Holbrook","c3":"352 317 7782","c4":"Dinner at SWB","c5":"History of SWB. Dinner by Chef Bridget"},{"c0":"7:30 pm","c1":"SWB Hall","c2":"","c3":"","c4":"","c5":"Florida documentary Movie"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Thursday, October 13, 2022","day":"Day 2","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"9:00 - 11:30 am","c1":"Florida Springs Institute - High Springs FL","c2":"Bob Knight","c3":"","c4":"","c5":"Ovewrview of Springs in North Central Florida"},{"c0":"12:00 - 1:00 pm","c1":"Ichetucknee State Park - North Entrance","c2":"","c3":"","c4":"Lunch","c5":"Picnic Lunch"},{"c0":"1:30 - 4:00 pm","c1":"Kayak on the Ichetucknee","c2":"Lars Andersen","c3":"","c4":"","c5":"Learn about this Magnificent Spring and River"},{"c0":"4:00 - 6:00 pm","c1":"","c2":"","c3":"","c4":"","c5":"Free Time"},{"c0":"6:15 - 7:00 pm","c1":"SWB Inn","c2":"","c3":"","c4":"Dinner","c5":"Dinner prepared by Chef Bridget"},{"c0":"7:00 - 8:00 pm","c1":"McKenzie Hall","c2":"","c3":"","c4":"","c5":"Documentary Movie"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Friday, October 14, 2022","day":"Day 3","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":"Restroom Stop in High Springs - No Restroom at the 27 Bridge"},{"c0":"9:00am - 12:30pm","c1":"Santa Fe River at The 27 Bridge","c2":"Lars Anderson","c3":"","c4":"","c5":"Interpretive River Run"},{"c0":"12:30 - 1:30 pm","c1":"Lunch at Blue Springs State Park","c2":"Park Ranger","c3":"","c4":"Lunch","c5":"Lunch with Park Ranger & Short Talk"},{"c0":"1:30 - 3:00pm","c1":"Continue Down Santa Fe River and at the 41 Bridge","c2":"Lars Anderson","c3":"","c4":"","c5":""},{"c0":"4:00 - 6:00 pm","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"6:00 - 7:00 pm","c1":"Harry's Seafood and More","c2":"","c3":"","c4":"Dinner","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Saturday, October 15, 2022","day":"Day 4","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Sunday, October 16, 2022","day":"Day 5","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Monday, October 17, 2022","day":"Day 6","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"},{"date":"Tuesday, October 18, 2022","day":"Day 7","rows":[{"c0":"7:30 - 8:45 am","c1":"SWB Front Porch","c2":"","c3":"","c4":"Breakfast","c5":"Breakfast at SWB Inn"},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""},{"c0":"","c1":"","c2":"","c3":"","c4":"","c5":""}],"l0":"Time","l1":"Location","l2":"Presenter","l3":"Contact","l4":"Meal","l5":"Description"}]}`

// itinerary.html
//  A simple app to generate and print multiple copies of an itinerary
//  Craig Fitzgerald
//
// todo:
//    go
//    print button
//    save / load file
//    save / load state

class ItineraryPageHandler {
   constructor(options) {
      this.tables = 7;
      this.copies = 15;
      this.storeId = "itinerary-generator";
      this.templates = {};
      this.saveDelay = 2000;
      this.timer = 0;
      this.stateName = "default";

      $("#date").get(0).valueAsDate = new Date();

      $("body" ).on("input", "[contenteditable]", (e) => this.Changed(3));
      $("body").on("click", ".go", (e) => this.PrintPrep(e));
      $("#date").on("change", (e) => this.DateChange(e));
      $("#results").on("click", ".print", (e) => this.Print(e));
      $("#results").on("click", ".back", (e) => this.Back(e));
      $("#loadBtn").on("click", (e) => this.LoadFile(e));
      $("#saveBtn").on("click", (e) => this.SaveFile(e));
      $(".header img").on("click", (e) => this.Debug());

      this.StashTemplates();
      this.DisplayPane(0);
      this.LoadState();
   }

   LoadState() {
      let stateData = localStorage.getItem(this.storeId);
      let state = "";
      if (stateData == undefined || stateData == 'undefined')
         state = this.DefaultState();
      else 
         state = JSON.parse(stateData);

      this.stateName = state.name;
      for (let table of state.tables) {
         $("#forms").append(this.Template("table", table));
         let tableNode = $("#forms table:last-of-type");
         for (let row of table.rows) {
            tableNode.find("tbody").append(this.Template("row", row));
         }
      }
      console.log("state loaded");
   }

   SaveState() {
      let state = {name: this.stateName, tables: []};
      $("#forms table").each((i, table) => {   
         state.tables.push(this.DomTableData($(table)))
      });
      localStorage.setItem(this.storeId, JSON.stringify(state));
      console.log("state saved");
      this.timer = 0;
   }

   async LoadFile() {
      let fileHandle;
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      let state = JSON.parse(contents); 
   
      $("#forms table").detach();
      this.stateName = state.name;
      for (let table of state.tables) {
         $("#forms").append(this.Template("table", table));
         let tableNode = $("#forms table:last-of-type");
         for (let row of table.rows) {
            tableNode.find("tbody").append(this.Template("row", row));
         }
      }
      this.Changed();
      console.log("state loaded");
   }

   async SaveFile() {
      let state = {name: this.stateName, tables: []};
      $("#forms table").each((i, table) => {   
         state.tables.push(this.DomTableData($(table)))
      });

      let saveFile = "";
      try {
         saveFile = await window.showSaveFilePicker({
             suggestedName: 'Itinerary.json'
         });
         const file = await saveFile.getFile();
         const contents = await file.text();
      } catch(e) {
         console.log(e);
      }
      let writable = await saveFile.createWritable();
      await writable.write(JSON.stringify(state, null, 2));
      await writable.close();
   }

   DomTableData(table) {
      let rows = [];
      table.find("tr").each((i, row) => {
         let cols = this.RowData($(row));
         if (cols) rows.push(cols);
      });

      let data = {
         id    : table.attr("id"),
         date  : table.find(".date").text(),
         day   : table.find(".day").text(),
      }
      return Object.assign(data, {rows}, this.LabelData(table));
   }
   
   LabelData(table) {
      let labels = {};
      for (let i=0; i<6; i++) {
         labels[`l${i}`] = table.find(`.l${i}`).text();
      }
      return labels;
   }

   RowData(row) {
      if (row.find('th').length) return;

      let cols = {};
      row.find('td').each((i, col) => {
         col = $(col);
         cols[col.attr('class')] = col.text();
      });
      return cols;
   }

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

   DefaultState(id, date, day) {
      return JSON.parse(DEFAULT_STATE);

      //let tables = [];
      //for (let i=1; i<8; i++) {
      //   tables.push(this.DefaultTable(i,"Sunday January 17  2021", i));
      //}
      //tables[0].rows[0] = {c0: "3:00 pm", c1: "SWB Inn", c2: "", c3: "", c4: "", c5: "Hotel Check-in and Program Registration"};
      //tables[0].rows[1] = {c0: "4:00 pm", c1: "pavilion", c2: "", c3: "352-371-9136", c4: "", c5: "Orientation"};
      //return {name: "Default", tables};
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

   Changed(e) {
      if (this.timer) window.clearTimeout(this.timer);
      this.timer = window.setTimeout((e) => this.SaveState(), this.saveDelay);
   }

   Debug(e) {
      console.log("debug");
      localStorage.removeItem(this.storeId);
   }

   DateChange() {
      let date = new Date($("#date").val());

      $("#forms table").each((i, table) => {
         $(table).find(".date").text(this.DateString(date, i+1));
      });
      this.SaveState();
   }

   DateString(date, delta) {
      let dt1 = new Date(date);
      
      let ms = date.getTime() + delta * 1000 * 60 * 60 * 24;
      let dt2 = new Date(ms);

      //return `${dt2}`.substring(0, 16);
      return dt2.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
   }

   DisplayPane(page) {
      page ? $("#forms").hide() : $("#forms").show();
      page ? $("#results").show() : $("#results").hide();
   }

   PrintPrep(e) {
      //console.log("printprep", e);
      let table = $(e.currentTarget).closest("table");

      $("#results .tables").empty();
      for (let i=0; i<18; i++) {
         $("#results .tables").append("<table>" + table.html() + "</table>");
      }
      this.DisplayPane(1);
   }

   Print(e) {
      window.print();
   }

   Back(e) {
      this.DisplayPane(0);
   }
   
}

$(function() {
   let options = {};
   var iph = new ItineraryPageHandler(options);
});


