// single line comment
/**
 * multiple line comments
 * @var
 * you can redeclare
 * var name = 'Moz'
 * var name = 'Karanja'
 
 * You can reassign a variable
 * var name = 'Moh'
 * name = 'Mary'
 * 
 * 
 * its always globally scoped
 */



 /**
  * @Let
  * you can't redeclare a variable
  * let name = 'Moh'
  * let name = 'Mary'
  
  * you can reassign a variable
  * let name = 'Moh'
  * name = 'Mary'
  */


  /**
   * @CONST
   * you can't redeclare variable
   * you can't reassign variable
   */


   //DATA TYPES
   /** primitive data types
    * @STRINGS - Characters/numbers wrapped in quotes e.g 'Moh' "Moh" '123'
    * @NUMBERS - decimal, whole numbers, negative numbers (not wrapped in quotes) e.g 1, 1.5, -1
    * @BOOLEANS - True or False (conditions)
    * @UNDEFINED - no value assigned
    * @NULL - nothing (not expecting a value)
    */



    /**Non primitive data types
     * @LISTS - arrays e.g [1,2,3.4], ['Moh' 'Mary]
     * @OBJECTS - Dictionaries(key/value pairs) e.g {name: 'Moh'}
     */


     // OPERATORS
     /**
      * @ADDITION -> +
      * @SUBTRACTION -> -
      * @MULTIPLICATION -> *
      * @DIVISION -> /
      * @MODULUS -> %
      */

      //const profit = 1000 - 500 - 200
      
      //console.log(profit)

      let length=prompt('Enter length')
      let width=prompt('Enter width')

      let Finallength=parseInt(length)
      let Finalwidth=parseInt(width)

      let area = Finallength * Finalwidth
      let perimeter = (Finalwidth + Finallength) * 2 

      console.log('perimeter')
      console.log(perimeter)
      console.log('area')
      console.log(area)