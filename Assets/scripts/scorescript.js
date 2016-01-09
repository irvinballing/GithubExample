#pragma strict
import UnityEngine.UI;

var prizeText: Text;
var playerScore : int;
var winScreen: GameObject;

function Update ()
{
	prizeText.text = playerScore.ToString("0");
}

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "prize")
	{
		playerScore++;
		Destroy(other.gameObject);
	}
}

function OnCollisionEnter (theCollision: Collision)
{
	if(theCollision.transform.tag == "win")
	{
		print("WINNER");
		winScreen.SetActive(true);
	}
}