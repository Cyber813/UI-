angular.module('myApp',[]);
		angular.module('myApp').controller('FirstCtrl',['$scope', function($scope ){

var associativity = [

{ LR: "MemberAccess", Symbol: ".", RL:"new(without argumentlist",symbol:"new"},
{ LR: "Computed Memeber Access", Symbol: "[]" ,RL:"Logical NOT",symbol:"!"},
{ LR: "Function Call", Symbol: "()",RL:"Bitwise NOT",symbol:"~" },
{ LR: "Multiplication", Symbol: "*",RL:"unary Plus",symbol:"+" },
{ LR: "Division", Symbol: "/" ,RL:"unary Negation",symbol:"-"},
{ LR: "Remainder", Symbol: "%" ,RL:"Prefix Increment",symbol:"++"},
{ LR: "Addition", Symbol: "+",RL:"Prefix Decrement",symbol:"--" },
{ LR: "Subtraction", Symbol: "-",RL:"typeof",symbol:"typeof"},
{ LR: "Bitwise Left Shift", Symbol: "<<" ,RL:"void",symbol:"void"},
{ LR: "Bitwise Right Shift", Symbol: ">>" ,RL:"delete",symbol:"delete"},
{ LR: "Bitwise Unsigned Right Shift", Symbol: ">>>",RL:"Exponentiation",symbol:"**" },
{ LR: "LessThan", Symbol: "<" ,RL:"Conditional",symbol:".. ? .. : .."},
{ LR: "LessThan Or Equalto", Symbol: "<=",RL:"Assignment",symbol:"=" },
{ LR: "GreaterThan", Symbol: ">",RL:"yield",symbol:"yield" },
{ LR: "GreaterThan Or Equalto", Symbol: ">=",RL:"yield*",symbol:"yield*" },
{ LR: "in", Symbol: "in" },
{ LR: "instanceof", Symbol: "instanceof" },
{ LR: "Equality", Symbol: "==" },
{ LR: "InEquality", Symbol: "!=" },
{ LR: "Strict Equality", Symbol: "===" },
{ LR: "Strict InEquality", Symbol: "!==" },
{ LR: "Bitwise AND", Symbol: "&" },
{ LR: "Bitwise XOR", Symbol: "^" },
{ LR: "Bitwise OR", Symbol: "|" },
{ LR: "Logical AND", Symbol: "&&" },
{ LR: "Logical OR", Symbol: "||" },
{ LR: "Comma or Sequence", Symbol: "," }






];

var noAssociativity = [
{ NA : "Grouping", Figure:"()"},
{ NA: "new with argumentlist", Figure:"new..(..)"},
{ NA: "Postfix Increment", Figure:"..++"},
{ NA: "Postfix Decrement", Figure:"..--"},
{ NA: "spread", Figure:"..."}



];

$scope.associativity = associativity;
$scope.noAssociativity = noAssociativity;



  }]);



 