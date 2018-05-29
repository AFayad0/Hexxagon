 <?php
        
        function sortScores($names, $scores)
        {
            //set0 is array for scores that has 0 hours, set1 1 hour
            $set0scores = []; $set0names = [];
            $set1scores = []; $set1names = [];
            
                
            //put the scores and names in sets
            for ($i=0; $i<count($scores); $i++)
            {
                $hours1 = substr($scores[$i], 0, 2);
                
                if ($hours1 == "00")
                {
                    $set0scores[] = $scores[$i];
                    $set0names[] = $names[$i];
                }
                else
                {
                   if ($hours1 == "01")
                    {
                        $set1scores[] = $scores[$i];
                        $set1names[] = $names[$i];
                    }
                }
            }
            
            //sort the 0 set
            for ($i=0; $i<count($set0scores); $i++)
            {
                for ($j=0; $j < count($set0scores); $j++ )
                {
                    $mins1 = intval(substr($set0scores[$i], 3 , 2));
                    $mins2 = intval(substr($set0scores[$j], 3 , 2));

                    
                    if ($mins1 < $mins2)
                    {
                        //swap scores
                        $temp = $set0scores[$j];
                        $set0scores[$j] = $set0scores[$i];
                        $set0scores[$i] = $temp;

                        //swap names
                        $temp = $set0names[$j];
                        $set0names[$j] = $set0names[$i];
                        $set0names[$i] = $temp;

                    }
                    else 
                    {
                        // check seconds if the miniutes are equal
                        if ($mins1 == $mins2)
                        {
                            $secs1 = intval(substr($set0scores[$i], 6 , 2));
                            $secs2 = intval(substr($set0scores[$j], 6 , 2));
                            
                            if ($secs1 < $secs2)
                            {
                                //swap scores
                                $temp = $set0scores[$j];
                                $set0scores[$j] = $set0scores[$i];
                                $set0scores[$i] = $temp;

                                //swap names
                                $temp = $set0names[$j];
                                $set0names[$j] = $set0names[$i];
                                $set0names[$i] = $temp;
                            }
                        }
                    }
                
                }
            }
             
             //sort the 1 set
            for ($i=0; $i<count($set1scores); $i++)
            {
                for ($j=0; $j < count($set1scores); $j++ )
                {
                    $mins1 = intval(substr($set1scores[$i], 3 , 2));
                    $mins2 = intval(substr($set1scores[$j], 3 , 2));

                    
                    if ($mins1 < $mins2)
                    {
                        //swap scores
                        $temp = $set1scores[$j];
                        $set1scores[$j] = $set1scores[$i];
                        $set1scores[$i] = $temp;

                        //swap names
                        $temp = $set1names[$j];
                        $set1names[$j] = $set1names[$i];
                        $set1names[$i] = $temp;

                    }
                    else 
                    {
                        // check seconds if the miniutes are equal
                        if ($mins1 == $mins2)
                        {
                            $secs1 = intval(substr($set1scores[$i], 6 , 2));
                            $secs2 = intval(substr($set1scores[$j], 6 , 2));
                            
                            if ($secs1 < $secs2)
                            {
                                //swap scores
                                $temp = $set1scores[$j];
                                $set1scores[$j] = $set1scores[$i];
                                $set1scores[$i] = $temp;

                                //swap names
                                $temp = $set1names[$j];
                                $set1names[$j] = $set1names[$i];
                                $set1names[$i] = $temp;
                            }
                        }
                    }
                
                }
            }
             
          $names = array_merge($set0names, $set1names);   
          $scores = array_merge($set0scores, $set1scores);  
            
          return array($names, $scores);
             
        }
             
    ?>