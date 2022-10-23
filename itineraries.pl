#!perl
#
# Craig Fitzgeraldd

use warnings;
use strict;
use JSON;
#use CGI qw(:cgi);
#use CGI::Carp qw(fatalsToBrowser);
use Gnu::TinyDB;
use Gnu::CGIUtil qw(Route ReturnText ReturnJSON);

my @ROUTES = (
   {method => "GET"   , resource => "itineraries", fn => \&GetItineraries },
   {method => "POST"  , resource => "itineraries", fn => \&PostItineraries},
   {method => "GET"   , resource => "itinerary"  , fn => \&GetItinerary   },
   {method => "PUT"   , resource => "itinerary"  , fn => \&PutItinerary   },
   {method => "DELETE", resource => "itinerary"  , fn => \&DeleteItinerary}
);

MAIN:
   Connection("samples");
   Route(@ROUTES);
   exit(0);

sub GetItineraries {
   my ($id, $params, $resource) = @_;

   print STDERR "GetItineraries: $id, $params\n";

   my $itineraries = FetchArray("select * from itineraries order by id");
   ReturnJSON([@{$itineraries}]);
}

sub PostItineraries {
   my ($id, $params, $resource) = @_;

   my $sql = "INSERT INTO itineraries (name,state) VALUES (?,?)";
   my $state = <STDIN>;
   my $data = decode_json($state);
   my $name = $data->{name};

   ExecSQL($sql, $name, $state);
   ReturnText(GetInsertId());
}

sub GetItinerary {
   my ($id, $params, $resource) = @_;

   print STDERR "GetItinerary: $id, $params\n";

   my $itinerary = FetchColumn("select state from itineraries where id=$id order by id");
   print "Content-type: text/json\n\n";
   print $itinerary;
}

sub PutItinerary {
   my ($id, $params, $resource) = @_;

   my $sql = "UPDATE itineraries SET name=?, state=? WHERE id=?";
   my $state = <STDIN>;
   my $data = decode_json($state);
   my $name = $data->{name};
   ExecSQL($sql, $name, $state, $id);
   ReturnText($id);
}

sub DeleteItinerary {
   my ($id, $params, $resource) = @_;

   my $sql = "DELETE FROM itineraries where id=?";
   ExecSQL($sql, $id);
   ReturnText("DeleteItinerary OK");
}
